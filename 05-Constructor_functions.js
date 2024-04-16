// Constructeur : maquette pour creation d'objet
// This: pour faire référence à notre objet

function Utilisateur(noms, email, ...amis){

    this.noms = noms
    this.email = email
    this.amis = amis
    this.login = function(){
        console.log(`${email} est connectées`)
    }
    this.logout = function(){
        console.log(`${email} est deconnectées`)
    }
}
const utili1 = new Utilisateur('Aby', 'aby@gmail.com', 'toto','tata')
console.log(utili1)
// acces a methode 
utili1.login()