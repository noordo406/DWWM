function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const operateurs = [
    "Addition",
    "Soustraction",
    "Multiplication",
    "Division",
    "Puissance",
    "Modulo"
]

function genererCalcul(num1, num2, op) {
    switch (operateurs[op]) {
        case 'Addition':
            return `${num1} + ${num2}`;
            break;
        case 'Soustraction':
            return `${num1} - ${num2}`;
            break;
        case 'Multiplication':
            return `${num1} * ${num2}`;
            break;
        case 'Division':
            return `${num1} / ${num2}`;
            break;
        case 'Puissance':
            return `${num1} ^ ${num2}`;
            break;
        case 'Modulo':
            return `${num1} % ${num2}`;
            break;
    }
}

function countDown(i) {
    return promise = new Promise((resolve) => {

        if (i==6) {
            console.log(`Essayer de faire le calcul ${calcul}`)
        } else {
            console.log(i);
        }

        if (i > 0) {
            setTimeout(() => {
                i -= 2;
                countDown(i).then(resolve);
            }, 2000);
        } else {
            resolve(`Le résultat est : ${resultat}`);
        }

    });

}

var calcul = genererCalcul(randomIntFromInterval(1,10),randomIntFromInterval(1,10),randomIntFromInterval(0,5));
var resultat = eval(calcul.replace("^", "**"))
let counter = countDown(6);
counter.then((msg) => {
    console.log(msg);
});