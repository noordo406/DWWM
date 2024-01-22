const numeros = new Set()
const tirage = new Set()

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function valider() {
    numeros.clear();
    document.querySelector(".saisi").innerHTML = "Pour rappel, vos numéros sont : "
    let select = document.querySelectorAll(".nombres")
    for (let elem of select) {
        elem.setAttribute("value", elem.value)
        numeros.add(elem.value)
        document.querySelector(".saisi").innerHTML += "<b>" + elem.value + " </b>"
    }

    if (numeros.size == 5) {
        document.querySelector("#result").classList.remove("hide")
        document.querySelector("#choix").classList.add("hide")
        tirage.clear();
        while (tirage.size < 5) {
            tirage.add(getRandomIntInclusive(1, 50).toString())
        }

        let numgagnants = 0
        let gain
        let resultat
        for (let elem of tirage) {
            resultat = document.createElement("span")
            resultat.innerHTML = elem
            if (numeros.has(elem)) {
                numgagnants++
                resultat.classList.add("win")
            } else {
            }
            document.querySelector(".generate").appendChild(resultat)
        }
        switch (numgagnants) {
            case 2:
                gain = 1000
                break
            case 3:
                gain = 5000
                break
            case 4:
                gain = 10000
                break
            case 5:
                gain = 100000
                break
            default:
                gain = 0
                break
        }
        let numComplementaire = document.querySelector("#complementaire").value
        let tirageComplementaire = getRandomIntInclusive(1, 10).toString()
        document.querySelector(".saisi").innerHTML += "et le numéro complémentaire <b>" + numComplementaire + "</b>"
        resultat = document.createElement("span")
        resultat.innerHTML = tirageComplementaire
        if (numComplementaire == tirageComplementaire) {
            gain += 2000
            resultat.classList.add("win")
        } else {
        }
        document.querySelector(".generate").appendChild(resultat)
        if (gain > 0) {
            document.querySelector("#result").querySelector("h3").innerHTML = `Vous avez gagné ${gain}€`
        } else {
            document.querySelector("#result").querySelector("h3").innerHTML = "Vous n'avez rien gagné, mais vous pouvez retenter votre chance"
        }
    }
}

function retenter() {
    document.querySelector("#choix").classList.remove("hide")
    document.querySelector("#result").classList.add("hide")
    document.querySelector(".generate").innerHTML = ""
}