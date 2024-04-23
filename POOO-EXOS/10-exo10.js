class Telechargement {
    constructor() {}

    demarrerTelechargement() {
        new Promise(function(resolve, reject) {
            resolve("Téléchargé avec succès");
        }).then(function(message) {
            console.log(message);
        }).catch(function(erreur) {
            console.error("Erreur lors du téléchargement :", erreur);
        });
    }
    arrêterTéléchargement() {
        new Promise(function(resolve, reject) {
            resolve("Téléchargé arreter");
        }).then(function(message) {
            console.log(message);
        }).catch(function(erreur) {
            console.error("Erreur lors du téléchargement :", erreur);
        });
    }
}

const telechargement1 = new Telechargement();
const telechargement2 = new Telechargement();
telechargement1.demarrerTelechargement();
telechargement2.arrêterTéléchargement();