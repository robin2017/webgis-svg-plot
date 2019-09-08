//1、绘制直线
function drawLine(p1, p2) {
    if (!(p1 instanceof Array && p1.length === 2
        && p2 instanceof Array && p2.length === 2)) {
        throw new Error('请输入点数组')
    }
    let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', p1[0]);
    line.setAttribute('y1', p1[1]);
    line.setAttribute('x2', p2[0]);
    line.setAttribute('y2', p2[1]);
    line.setAttribute('stroke-width', lineWidth);
    line.setAttribute('stroke', color);
    svg.appendChild(line);
    return line;
}

function modifyLine(line, p) {
    if (!(p instanceof Array && p.length === 2)) {
        throw new Error('请输入点数组')
    }
    line.setAttribute('x2', p[0]);
    line.setAttribute('y2', p[1]);
}

function drawRect(p1, p2) {
    if (!(p1 instanceof Array && p1.length === 2
        && p2 instanceof Array && p2.length === 2)) {
        throw new Error('请输入点数组')
    }
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', p1[0]);
    rect.setAttribute('y', p1[1]);
    rect.setAttribute('width', (p2[0] - p1[0]) + "");
    rect.setAttribute('height', (p2[1] - p1[1]) + "");
    rect.setAttribute('stroke-width', lineWidth);
    rect.setAttribute('stroke', color);
    rect.setAttribute('fill', 'none');
    svg.appendChild(rect);
    return rect;
}

function modifyRect(rect, p) {
    if (!(p instanceof Array && p.length === 2)) {
        throw new Error('请输入点数组')
    }
    let x = rect.getAttribute('x');
    let y = rect.getAttribute('y');

    rect.setAttribute('width', p[0] - x);
    rect.setAttribute('height', p[1] - y);
}


function drawCircle(p1, p2) {

    if (!(p1 instanceof Array && p1.length === 2
        && p2 instanceof Array && p2.length === 2)) {
        throw new Error('请输入点数组')
    }
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', p1[0]);
    circle.setAttribute('cy', p1[1]);

    let x2 = Math.pow((p1[0] - p2[0]), 2);
    let y2 = Math.pow((p1[1] - p2[1]), 2);

    let r = Math.pow(x2 + y2, 0.5);
    circle.setAttribute('r', r + "");
    circle.setAttribute('stroke-width', lineWidth);
    circle.setAttribute('stroke', color);
    circle.setAttribute('fill', 'none');
    svg.appendChild(circle);
    return circle;
}

function modifyCircle(circle, p) {
    if (!(p instanceof Array && p.length === 2)) {
        throw new Error('请输入点数组')
    }
    let cx = circle.getAttribute('cx');
    let cy = circle.getAttribute('cy');
    let x2 = Math.pow((p[0] - cx), 2);
    let y2 = Math.pow((p[1] - cy), 2);
    let r = Math.pow(x2 + y2, 0.5);
    circle.setAttribute('r', r);
}


function drawDebugPoint(p, stroke = 'black') {
    if (typeof DEBUG === 'undefined') return;
    if (!(p instanceof Array && p.length === 2)) {
        throw new Error('请输入点数组')
    }

    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', p[0]);
    circle.setAttribute('cy', p[1]);
    circle.setAttribute('r', '3');
    circle.setAttribute('stroke', stroke);
    circle.setAttribute('fill', stroke);
    svg.appendChild(circle)
    return circle;
}

//如果需要得到中点，则part=2
function getPartPoint(p1, p2, part) {
    if (!(p1 instanceof Array && p1.length === 2
        && p2 instanceof Array && p2.length === 2)) {
        throw new Error('请输入点数组')
    }
    return [((part - 1) * p1[0] + p2[0]) / part, ((part - 1) * p1[1] + p2[1]) / part]
}

//b围绕a选择theta度
function rotateB(a, b, theta) {

    if (!(a instanceof Array && a.length === 2
        && b instanceof Array && b.length === 2)) {
        throw new Error('请输入点数组')
    }

    let THETA = theta * Math.PI / 180;
    let vecA = vec2.create(a);
    let vecB = vec2.create(b);
    let vecAB = vec2.subtract(vecB, vecA);
    let mat = mat2.create([Math.cos(THETA), Math.sin(THETA),
        -Math.sin(THETA), Math.cos(THETA)]);
    return vec2.add(vecA, mat2.multiplyVec2(mat, vecAB));
}

//输入为x，y形式
//先延伸，再旋转
function getPointEx(a, b, alpha, theta) {
    if (!(a instanceof Array && a.length === 2
        && b instanceof Array && b.length === 2)) {
        throw new Error('请输入点数组')
    }
    let Xbb = a[0] + (1 + alpha) * (b[0] - a[0]);
    let Ybb = a[1] + (1 + alpha) * (b[1] - a[1]);
    return rotateB(b, [Xbb,Ybb], theta)
}

function getCfromAB(a, b, theta) {
    if (!(a instanceof Array && a.length === 2
        && b instanceof Array && b.length === 2)) {
        throw new Error('请输入点数组')
    }

    let THETA = theta * Math.PI / 180;
    let vecA = vec2.create(a);
    let vecB = vec2.create(b);
    let vecAB = vec2.subtract(vecB, vecA);
    let mat = mat2.create([Math.cos(THETA), Math.sin(THETA),
        -Math.sin(THETA), Math.cos(THETA)]);
    return vec2.add(vecA, vec2.multiply(mat2.multiplyVec2(mat, vecAB), 1 / (2 * Math.cos(THETA))));
}

//绘制贝叶斯曲线
function drawBys2(start, controller, end) {
    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    let d = "M";
    d += start[0] + " " + start[1];
    d += " Q";
    d += end[0] + " " + end[1] + ",";
    d += controller[0] + " " + controller[1];
    path.setAttribute('d', d);
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', lineWidth);
    path.setAttribute('fill', 'none');
    svg.appendChild(path);
    return path
}