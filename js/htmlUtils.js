function request_get(url) {
    return new Promise(resolve=>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.onload = function (data) {
            resolve(this.responseText)
        };
        xhr.send()
    })
}

function loadHtml(select,url) {
    request_get(url).then(data=>{
      let dom =  document.querySelector(select);
      dom.appendChild(new DOMParser().parseFromString(data,'text/html').body.childNodes[0])
    })
}