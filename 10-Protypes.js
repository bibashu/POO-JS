// Prototypes : c'est u object qui regroupe l'ensemble des methode d'un objet
function Utilisateur(noms, email, ...amis){
        this.noms = noms;
        this.email = email;
        this.amis = amis;
    }
    // Liaison d'une methode ou prototype
    Utilisateur.prototype.login = function() {
        console.log(`${this.email} est connectées`)
    }
    Utilisateur.prototype.logout = function(){
        console.log(`${this.email} est deconnectées`)
    }

    const util = new Utilisateur('Aby', 'Aby@gmail.com', 'toto','tata')
    const util2 = new Utilisateur('Abybatou', 'Abybatou@gmail.com', 'toto')
    console.log(util)