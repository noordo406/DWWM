let menu = document.querySelector('.menu');
let main = document.querySelector('.main');
function toggleMenu() {
    if (menu.style.marginLeft === "0px") {
        menu.style.marginLeft = "-200px";
    } else {
        menu.style.marginLeft = "0px";
    }
};

let titreElement = document.getElementById('titre');
titreElement.innerHTML = "Contenu généré dynamiquement";

let nouveauParagraphe = document.createElement('p');
nouveauParagraphe.textContent = "Paragraphe généré dynamiquement";
document.body.appendChild(nouveauParagraphe);