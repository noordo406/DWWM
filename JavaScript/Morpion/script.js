let grille = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]
const symboles = ["X", "O"]
let tour = 0;
let gameover = 0;

function verifGrille() {
    let hash = ""
    for (i = 0; i < grille.length; i++) {
        for (j = 0; j < grille[i].length; j++) {
            hash += grille[i][j].toString()
        }
    }
    const grilleSeparee = []
    grilleSeparee.push(hash.substring(0, 3))
    grilleSeparee.push(hash.substring(3, 6))
    grilleSeparee.push(hash.substring(6, 9))
    grilleSeparee.push(hash[0] + hash[3] + hash[6])
    grilleSeparee.push(hash[1] + hash[4] + hash[7])
    grilleSeparee.push(hash[2] + hash[5] + hash[8])
    grilleSeparee.push(hash[0] + hash[4] + hash[8])
    grilleSeparee.push(hash[2] + hash[4] + hash[6])
    for (a in grilleSeparee) {
        if (grilleSeparee[a].replaceAll("1", "") == "" || grilleSeparee[a].replaceAll("2", "") == "") {
            return 1
        }
    }
    return 0
}

function constructGrille() {
    for (i = 0; i < grille.length; i++) {
        let row = document.createElement("tr")
        for (j = 0; j < grille[i].length; j++) {
            let box = document.createElement("td")
            box.id = i.toString() + j.toString()
            box.addEventListener("click", function () {
                if (!gameover) {
                    let x = box.id[0]
                    let y = box.id[1]
                    if (grille[x][y] == 0) {
                        grille[x][y] = tour % 2 + 1
                        box.innerHTML = symboles[tour % 2]
                        tour++
                        document.querySelector("#tour").innerHTML = `${tour + 1} (${symboles[tour % 2]})`
                        if (tour == 9) {
                            document.querySelector("#info").innerHTML = "Partie terminée. Match nul."
                            document.querySelector("#rejouer").classList.remove("hide")
                            gameover = 1;
                        }
                        if (verifGrille()) {
                            document.querySelector("#info").innerHTML = "Partie terminée. Le gagnant est " + symboles[(tour + 1) % 2]
                            document.querySelector("#rejouer").classList.remove("hide")
                            gameover = 1;
                        }
                    }
                }
            })
            row.appendChild(box)
        }
        document.querySelector("table").appendChild(row)
    }
}

function rejouer() {
    grille = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]
    tour = 0;
    gameover = 0;
    document.querySelector("table").innerHTML = ""
    constructGrille()
    document.querySelector("#info").innerHTML = `Tour <span id="tour">1 (X)</span>`
    document.querySelector("#rejouer").classList.add("hide")
}

constructGrille()