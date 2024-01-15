let logo = document.createElement("img")
logo.src = "images/logo.png"
logo.style = "width:100px; border: 1px solid black"
document.querySelector("footer").insertAdjacentElement("afterend", logo)

let form = document.createElement("form")
form.method = "GET"

let input = document.createElement("input")
input.type = "number"
input.name = "age"

let bouton = document.createElement("input")
bouton.value = "Valider"
bouton.type = "submit"

let label = document.createElement("label")
label.innerHTML = "Quel est votre âge? "
label.setAttribute("for", "age")

form.appendChild(label)
form.appendChild(input)
form.appendChild(bouton)
document.querySelector("#partie2").appendChild(form)

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.get('age')) {
    let PAge = document.createElement("p")
    PAge.innerHTML = `Vous avez ${urlParams.get('age')} ans`
    document.querySelector("#partie2").appendChild(PAge)
}

let remplacement = document.createElement("p")
remplacement.innerHTML = "Ceci n'est pas un titre"
remplacement.title = "xd"
document.querySelector("header").removeChild(document.querySelector(".logo"))
document.querySelector("main").replaceChild(remplacement, document.querySelector("h1"))