let nombreQuestions = 0
let tableSolutions = []

function ajouterQuestion(intitule, r1, r2, r3, sol) {
    let container = document.createElement("div")
    let titre = document.createElement("h2")
    let reponse1 = document.createElement("span")
    let reponse2 = document.createElement("span")
    let reponse3 = document.createElement("span")
    let checkr1 = document.createElement("input")
    let checkr2 = document.createElement("input")
    let checkr3 = document.createElement("input")
    let labelr1 = document.createElement("label")
    let labelr2 = document.createElement("label")
    let labelr3 = document.createElement("label")

    container.classList.add("questions")
    nombreQuestions++
    container.id = "question" + nombreQuestions

    titre.innerHTML = intitule
    checkr1.setAttribute("type", "radio")
    checkr1.setAttribute("name", `reponse${nombreQuestions}`)
    checkr1.setAttribute("value", "1")
    checkr2.setAttribute("type", "radio")
    checkr2.setAttribute("name", `reponse${nombreQuestions}`)
    checkr2.setAttribute("value", "2")
    checkr3.setAttribute("type", "radio")
    checkr3.setAttribute("name", `reponse${nombreQuestions}`)
    checkr3.setAttribute("value", "3")
    labelr1.setAttribute("for", "1")
    labelr1.innerHTML = r1
    labelr2.setAttribute("for", "2")
    labelr2.innerHTML = r2
    labelr3.setAttribute("for", "3")
    labelr3.innerHTML = r3
    reponse1.appendChild(checkr1)
    reponse1.appendChild(labelr1)
    reponse2.appendChild(checkr2)
    reponse2.appendChild(labelr2)
    reponse3.appendChild(checkr3)
    reponse3.appendChild(labelr3)
    container.appendChild(titre)
    container.appendChild(reponse1)
    container.appendChild(reponse2)
    container.appendChild(reponse3)
    document.querySelector("#questioncontainer").appendChild(container)
    tableSolutions.push(sol)

}

function validerReponses() {
    let reponses = []
    let i = 1
    for (let i = 1; i <= nombreQuestions; i++) {
        let selection = document.getElementsByName(`reponse${i}`)
        let checked = 0
        for (let radio of selection) {
            if (radio.checked) {
                checked = 1
                res = radio.value;
            }
        }
        if (checked == 0) {
            res = 0;
        }
        reponses.push(res)
    }
    if (!reponses.includes(0)) {
        res = 0;
        for (i = 0; i < reponses.length; i++) {
            if (reponses[i] == tableSolutions[i]) {
                res++
                document.querySelector(`#question${i + 1}`).classList.add("win")
                document.querySelector(`#question${i + 1}`).classList.remove("lose")
            } else {
                document.querySelector(`#question${i + 1}`).classList.add("lose")
                document.querySelector(`#question${i + 1}`).classList.remove("win")
            }
        }
        let resultat = document.querySelector("#resultat")
        switch (res) {
            case 5:
                resultat.innerHTML = `Parfait!`
                break
            case 4:
                resultat.innerHTML = `Super!`
                break
            case 3:
                resultat.innerHTML = `Bien!`
                break
            case 2:
                resultat.innerHTML = `Encore un effort!`
                break
            case 1:
                resultat.innerHTML = `Dommage!`
                break
            case 0:
                resultat.innerHTML = `Aïe!`
                break
        }
        resultat.innerHTML += ` Votre score est de ${res}/${nombreQuestions}`
    }

}

ajouterQuestion("Que vaut F en héxadécimal?", "10", "15", "16", 3)
ajouterQuestion("Lequel de ces nombres n'est pas un nombre premier?", "1", "2", "3", 1)
ajouterQuestion("Lequel de ces nombres n'est pas un nombre réel?", "i", "e", "pi", 1)
ajouterQuestion("Lequel de ces nombres est le plus grand?", "100!", "10^100", "1 centillion", 3)
ajouterQuestion("Dans quel ensemble d'entiers y-a-t'il plus de nombres?", "[0, ∞]", "[-∞, ∞]", "Aucun des deux", 3)