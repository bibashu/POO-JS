// Classes: model ou maquette pour creer des objets

class Utilisateur {
    // constructor : c'est une fonction qui implémente les propriété d'un objet
    constructor(noms, email, ...amis){
        this.noms = noms;
        this.email = email;
        this.amis = amis;
    }
        login() {
            console.log(`${this.email} est connectées`)
        }
        logout(){
            console.log(`${this.email} est deconnectées`)
        }
    }
          
const util = new Utilisateur('Aby', 'Aby@gmail.com', 'toto','tata')
const util2 = new Utilisateur('Abybatou', 'Abybatou@gmail.com', 'toto')
console.log(util)
console.log(util2)
