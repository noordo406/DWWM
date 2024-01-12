let personnage = {
    nom : "racon",
    prenom : "bruno",
    ditBonjour : function(){
        console.log(`bonjour ${this.prenom} ${this.nom}`)
    }
}

let personnage1 = {
    ...personnage,
    nom : "bracon",
    prenom : "runo"
}

let personnage2 = {}
Object.assign(personnage2,personnage);
personnage2.nom = "acon";
personnage2.prenom = "buno";

personnage.ditBonjour();
for(let value in personnage1) {
    console.log(personnage1[value]);
}
console.log(personnage2);
console.log(Object.keys(personnage));
console.log(Object.keys(personnage).length);
console.log(Object.values(personnage));
console.log(Object.entries(personnage));