const calculXY = (x, y, fonctionCalcul) => fonctionCalcul(x, y);
const addition = (x,y) => x + y;
const soustraction = (x,y) => x - y;
const multiplication = (x,y) => x * y;
const division = (x,y) => x / y;

console.log(`Le resultat est : ${calculXY(5, 3, addition)}`);
console.log(`Le resultat est : ${calculXY(12, 10, soustraction)}`);
console.log(`Le resultat est : ${calculXY(10, 11, multiplication)}`);
console.log(`Le resultat est : ${calculXY(5, 3, division)}`);