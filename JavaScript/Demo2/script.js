const notes = [5, 10, 15, 20];
notes.pop();
notes.push(17,13);

const notes2 = notes.map(function(note) { 
    return Math.pow(note,2);
});
const index = notes.findIndex(function(note){
    return note === 15;
})
const valeur = notes.find(function(note){
    return note === 15;
})

console.log(notes);
console.log(notes2);
console.log(index);
console.log(valeur);

const persos = [
    ["racon", 8, 6, 12],
    ["possum", 2, 3, 4],
    ["carpincho", 2, 6, 10]
];
const valeur2 = persos.find(function(p){
    return p[0] === "racon";
});
console.log(valeur2);