// alert("Bonjour");
// let nombre = prompt("Saisir un nombre :");
// console.log("Le nombre saisi est "+nombre);

// const imgBalise = document.getElementsByTagName("img");
// console.log(imgBalise);
// const baliseP3 = document.querySelector("#partie3")
// console.log(baliseP3);

//creation d'un noeud
// let balise1P = document.createElement("p")
// let textBalise1P = document.createTextNode("premier paragraphe ")
// let textBalise1P2 = document.createTextNode("deuxieme paragraphe")
// balise1P.appendChild(textBalise1P)
// balise1P.appendChild(textBalise1P2)
// let baliseP3 = document.querySelector("#partie1")
// baliseP3.appendChild(balise1P)


// let balise2P = document.createElement("p")
// balise2P.appendChild(document.createTextNode("beau paragraphe "))
// balise2P.appendChild(document.createTextNode("joli paragraphe"))
// document.querySelector("#partie2").appendChild(balise2P)

// let balise3P = document.createElement("p")
// balise3P.innerHTML = "nouveau paragraphe "
// balise3P.innerHTML += "autre paragraphe"
// document.querySelector("#partie3").appendChild(balise3P)

// let balise4P = document.createElement("p")
// balise4P.innerHTML = "test de texte"
// document.querySelector("#partie3").insertBefore(balise4P,document.querySelector("#partie3 p"))

// let balise5P = document.createElement("p")
// balise5P.innerHTML = "deuxieme test"
// document.querySelector("#partie2").insertAdjacentElement("beforebegin", balise5P)

// let balise6P = document.createElement("p")
// balise6P.innerHTML = "troisieme test"
// document.querySelector("#partie2").insertAdjacentElement("afterend", balise6P)

// document.querySelector("#partie2").remove()

// let parties = document.querySelectorAll(".partie")
// for (let partie of parties) {partie.remove()}

let partie2 = document.querySelector("#partie2")
// partie2.removeChild(document.querySelector("#partie2 p"))

let img = document.createElement("img")
img.src = "images/logo.png"
img.style = "width:400px; height:100px"

document.querySelector("#partie2").replaceChild(img,document.querySelector("#partie2 p"))