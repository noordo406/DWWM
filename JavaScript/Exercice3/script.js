var tacheId = 0;

function modifierTache(id) {
    const tache = document.querySelector('.tache' + id).firstChild.textContent;
    let modif = prompt("Modifier la tâche", tache);
    if (modif != null && modif != "") {
        document.querySelector('.tache' + id).firstChild.textContent = modif;
    }
}
function supprimerTache(id) {
    document.querySelector(".tache" + id).remove();
}

function ajouterTache() {
    const tache = document.querySelector('#nouvelleTache').value;
    if (tache != "") {
        const contenu = document.createElement("span");
        const conteneur = document.createElement("div");

        contenu.textContent = tache;

        const boutonModifier = document.createElement("button");
        boutonModifier.textContent = "Modifier";
        boutonModifier.classList.add("boutonModifier");
        boutonModifier.setAttribute("onclick", "modifierTache(" + tacheId + ")");

        const boutonEffacer = document.createElement("button");
        boutonEffacer.textContent = "Effacer";
        boutonEffacer.classList.add("boutonEffacer");
        boutonEffacer.setAttribute("onclick", "supprimerTache(" + tacheId + ")");

        conteneur.appendChild(contenu);
        conteneur.appendChild(boutonModifier);
        conteneur.appendChild(boutonEffacer);
        conteneur.classList.add("tache" + tacheId);
        tacheId++;
        document.querySelector("#listeTaches").appendChild(conteneur);
    }
}
