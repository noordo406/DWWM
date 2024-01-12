class Personne {
    constructor(name, age) {
        this.nom = name;
        this.age = age;
    }
    anniversaire() {
        this.age++;
    }

    afficherPersonne() {
        return `Nom : ${this.nom} - Age : ${this.age}`
    }
}

class Guerrier extends Personne {
    constructor(nom, age, pseudo) {
        super(nom, age);
        this.pseudo = pseudo;
        this.force = 3;
        this.intel = 1;
    }

    afficherPersonne() {
        let afficher = super.afficherPersonne();
        afficher += ` - Pseudo : ${this.pseudo} - Force : ${this.force} - Intelligence : ${this.intel}`
        return afficher;
    }
}

let personne1 = new Guerrier("bruno", 18, "sneed");
let personne2 = new Personne("racon", 16);
personne1.anniversaire();
console.log(personne1.afficherPersonne());
