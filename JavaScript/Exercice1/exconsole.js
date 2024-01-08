const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Veuillez entrer un nombre : ', num => {
    var res = 1;
    for (let i = 1; i <= num; i++) {
        res *= i;
    }
    console.log(`${num}! = ${res}`);
    readline.close();
});
