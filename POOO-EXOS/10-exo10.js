class Telechargement {
  constructor(lien) {
    this.lien = lien;

    // Création de la promesse
    this.promise = new Promise((resolve, reject) => {
        resolve('Le telechargement a demarrer')
        reject('Le telechargement a echoué')
    });
  }

  // Méthode pour démarrer le téléchargement
  démarrerTéléchargement() {
    return this.promise;
  }

  // Méthode pour arrêter le téléchargement
  arrêterTéléchargement() {
    // On supprime la référence à la promesse pour indiquer qu'elle n'est plus en cours
    this.promise = null;
    console.log("Le téléchargement a été arrêté.");
  }
}

// Exemple d'utilisation
const téléchargement = new Telechargement("http://exemple.com/lien/fichier");
téléchargement
// consommateur de code
  .démarrerTéléchargement()
  .then((message) => {
     // Affiche "Le téléchargement a démarré."
    console.log(message);
  })
  .catch((erreur) => {
    // Affiche "Le téléchargement n'a pas pu démarrer."
    console.error(erreur); 
  });
