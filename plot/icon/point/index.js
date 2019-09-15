/**
 * 自动生成ret.svg,只对其中cx,cy,x,y,x1,x2,y1,y2进行变化
 * 对points,d没有做变化，需要手动操作
 * */
const fs = require('fs');
const regEx = /\s[x,y][1,2]="([0-9\.]*?)"|\sc[x,y]="([0-9\.]*?)"|\s[x,y]="([0-9\.]*?)"/;
const dx = -56, dy = -32;
let content = fs.readFileSync('point-lib-origin.svg', 'utf-8');
//去掉换行和空格
content = content.replace(/[\r\n]/g, " ");
content.replace(/\s+/g, " ");

let newContent = "";

while (true) {
    let ret = regEx.exec(content);
    if (ret === null) {
        newContent += content
        break;
    }
    let index = ret.index;
    let length = ret[0].length;
    let beforeValue = parseFloat(ret[1] || ret[2] || ret[3]);
    let isX = ret[0].indexOf('x') !== -1;
    let afterValue = beforeValue + (isX ? dx : dy);
    let tmp = ret[0].replace(beforeValue, afterValue);

    newContent += content.substring(0, index) + tmp;
    content = content.substring(index + length, content.length);
}
fs.writeFileSync('ret.svg', newContent, 'utf-8');