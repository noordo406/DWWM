let valider = document.createElement("input")
valider.type = "submit"
valider.value = "Valider"

document.querySelector("form").method = "GET"
document.querySelector("form").appendChild(valider)

document.getElementById("nom").name = "nom"
document.getElementById("prenom").name = "prenom"

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.get('nom')) {
    let valeurs = document.createElement("p")
    valeurs.innerHTML = `Vous êtes ${urlParams.get('prenom')} ${urlParams.get('nom')}`
    document.querySelector("form").insertAdjacentElement("afterend",valeurs)
}

document.querySelector("body").style.fontFamily = "serif"
for (let elem of document.querySelectorAll("p")){
    elem.style = "color: blue"
}
for (let elem of document.querySelectorAll("h2")){
    elem.style.cssText = "color : green"
    elem.style.cssText += ";border : 2px solid black; border-radius : 10px"
}