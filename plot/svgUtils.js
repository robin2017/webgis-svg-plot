function loadSvg(selector, svgUrl) {
    function get() {
        return new Promise((resolve) => {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", svgUrl, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4
                    && xhr.status == 200) {
                    resolve(xhr.responseText)
                }
            };
            xhr.send();
        })
    }

    return new Promise((resolve) => {
        let ele = document.querySelector(selector);
        get(svgUrl).then(xml => {
            //string转化为html的dom的原生方法
            let svgDom = new DOMParser().parseFromString(xml,
                'text/html').body.childNodes[0];
            //svg高度和挂载元素一样
            svgDom.style = "height:100%";
            ele.appendChild(svgDom);
            resolve(true)
        });
    })
}
