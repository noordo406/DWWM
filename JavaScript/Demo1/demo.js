// node demo.js
const TEST = 5;
var tab = [10, 20, 30, 40];
var perso = {
    nom : "bruno",
    age : 10
}
if (TEST == 1) {
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
} else if (TEST == 2) {
    for (let i = 0; i < tab.length; i++) {
        console.log(tab[i])
    }
} else if (TEST == 3) {
    for (let value in tab) {
        console.log(`Indice ${value} : ${tab[value]}`)
    }
} else if (TEST == 4) {
    for (let indice in perso) {
        console.log(`${indice} : ${perso[indice]}`)
    }
} else if (TEST == 5) {
    for (let val of tab) {
        console.log(val)
    }
}

