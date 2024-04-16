// notion d'héritage

class Utilisateur {
  // constructor : c'est une fonction qui implémente les propriété d'un objet
  constructor(noms, email, ...amis) {
    this.noms = noms;
    this.email = email;
    this.amis = amis;
  }
  login() {
    console.log(`${this.email} est connectées`);
  }
  logout() {
    console.log(`${this.email} est deconnectées`);
  }
}
// Heritage des propriétes et des methodes(fonctions)
class Admin extends Utilisateur {
  //  uniquement accessible à l'utilisateur
  supprimerUtilisateur(util) {
    utilisateurs = utilisateurs.filter((utilisateur) => {
      return (utilisateur.email != util.email);
    });
  }
}

const util = new Utilisateur("Aby", "Aby@gmail.com", "toto", "tata");
const util2 = new Utilisateur("Abybatou", "Abybatou@gmail.com", "toto");

const admin = new Admin("Khady", "Khady@gmail.com", "jean");

let utilisateurs = [util, util2, admin];
console.log(utilisateurs);

admin.supprimerUtilisateur(util2)
console.log(utilisateurs)