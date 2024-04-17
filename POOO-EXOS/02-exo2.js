// ->>>EXO3 --- Encapsulation
class Personnes {
    // Toujours ajouté les élément ptivés avnt l'appele du constructeur
    #nom;
    #age;
    constructor(nom, age){
        this.#nom = nom
        this.#age = age 
    }
    afficherInfoPersonnes(){
        console.log(' ')
        console.log(`Nom : ${this.#nom}`)
        console.log(`Age : ${this.#age}`)
        console.log(' ')
    }
    // getters ou accesseurs permet d'accéder au donées privé ou public
    get nom(){
        return this.#nom;
    }
    get age(){
        return this.#age
    }
    
    testAge(){
        if(this.age < 0){
            console.log('L\'age en négative n\'existe pas')
        }else{
            console.log('age est positive')
        
        }
    }
}
let perso1 = new Personnes('nabou', 50)
let perso2 = new Personnes('Toto', -5)

perso1.afficherInfoPersonnes()
perso2.afficherInfoPersonnes()


// Erreur syntaxe 
// Property '#nom' is not accessible outside class 'Personnes' because it has a private identifier.ts(18013)
// console.log(perso1.#nom)

// On peut maintenant accéder à la propriété nom grace aux getters
console.log(`Nom: ${perso1.nom}`)

perso1.testAge()
console.log(' ')
console.log(`Nom: ${perso2.nom}`)

perso2.testAge()
