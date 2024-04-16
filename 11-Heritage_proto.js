// Prototypes : c'est u object qui regroupe l'ensemble des methode d'un objet
function Utilisateur(noms, email, ...amis){
    this.noms = noms;
    this.email = email;
    this.amis = amis;
}

function Admin(...param){
    // heritage des propriétes 
    Utilisateur.apply(this, param)
}
// Liaison d'une methode ou prototype
Utilisateur.prototype.login = function() {
    console.log(`${this.email} est connectées`)
}
Utilisateur.prototype.logout = function(){
    console.log(`${this.email} est deconnectées`)
}
// Heritage des prototypes (methodes)
Admin.prototype = Object.create(Utilisateur.prototype)

// functio seulement accessible par l'admin

Admin.prototype.supprimerUtilisateur = function(utils){
    utilisateurs = utilisateurs.filter(utilisateur => {
        return utilisateur.email != util.email
        
    });
}
const util = new Utilisateur('Aby', 'Aby@gmail.com', 'toto','tata')
const admin = new Admin('Abybatou', 'Abybatou@gmail.com', 'toto')

let utilisateurs = [util, admin]
console.log(utilisateurs)