
/**  Avec le Singleton Pattern, nous limitons l'instanciation de certaines classes à une
 seule instance. Cette instance unique n'est pas modifiable et est accessible globalement dans toute l'application.
 
 */
/** @param  instance: pour contenir l'instace unique de la classe! */
let instance;

class configuration {
    constructor(config){
        // Test siune instance existe sinon il nous envoie ue erreur
        if(instance){
            throw new Error('Vous devez creer une instance')
        }
        this.config = config /**Propriétéde configuration */
        instance = this
    }
}
/** @param {freeze}  pour d'assurer qu'on peut créér qu'un seul instnce*/

const configuration1 = Object.freeze(new configuration({"background": "red", "port": 2300} ))
// const configuration2 = Object.freeze(new configuration("background"))
console.log(configuration1)
// console.log(configuration2)

// export default configuration()