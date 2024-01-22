function creerElement(type) {
    console.log(type)
    let elem = document.createElement(type)
    if (type != "hr") {
        elem.innerHTML = document.getElementById(type).dataset.placeholder
        elem.contentEditable = "true"
    }
    document.querySelector("#content").appendChild(elem)
}

function exporterHTML() {
    let text = document.querySelector("#content").innerHTML.replaceAll(' contenteditable="true"', '');
    document.querySelector('#popup').querySelector("div").textContent = text
    document.querySelector('#popup').classList.remove("hide")
}

document.querySelector('#popup').onclick = function (e) {
    if (e.target != document.querySelector('#popup').querySelector("div")) {
        document.querySelector('#popup').classList.add("hide")
    }
}