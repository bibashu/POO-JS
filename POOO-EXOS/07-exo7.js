let logger = {
    log(){
        console.log('Vous etes connecté');
    }
}

class Persones {

    constructor(nom, prenom){
        this.nom = nom
        this.age = prenom 
    }
   
}

// Application du mixon logger à la classe personne
Object.assign(Persones.prototype, logger)

const newPersonne = new Persones("aby", "ndiaye")
console.log(newPersonne);
