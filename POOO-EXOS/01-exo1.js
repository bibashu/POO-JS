class Persones {

    constructor(nom, age){
        this.nom = nom
        this.age = age 
    }
    afficherInfoPersonnes(){
        console.log(`Nom : ${this.nom}`)
        console.log(`Age : ${this.age}`)
        console.log(' ')
    }
}

let Personne1 = new Persones('Aby', 24)
let Personne2 = new Persones('Toto', 44)

Personne1.afficherInfoPersonnes()
Personne2.afficherInfoPersonnes()

// -----------------------------------------------//
// exo2 ---Héritage
class Etudiants extends Persones {
    constructor(nom,age, Specialisation){
        // super(): appele le constructeur de la classe parente et lui passe des arguments (nom,age)
        super(nom, age)
        this.Specialisation = Specialisation
    }
    afficherInfoPersonnes(){
       
        console.log(`Nom : ${this.age}`)
        console.log(`Age : ${this.nom}`)
        // console.log(`Nom : ${super.age}`)
        console.log(`Spécilaisation : ${this.Specialisation}`)
    }
}
let Etudiant1 = new Etudiants('Abybatou',24,'Develloppemen web')

Etudiant1.afficherInfoPersonnes()
