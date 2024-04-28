class Personnes {

    constructor(nom, prenom, age,ville){
        this.nom = nom
        this.prenom = prenom 
        this.age = age 
        this.ville = ville 
    }
  
   static _Transformation(ChaineJSON){
    // Tranformer une chaine en Onbjet JSon en utilisant la méthode Parse()
    let Chaine_tranformer = JSON.parse(ChaineJSON);
    
    // console.log(Chaine_tranformer);
    // alert retourne un objet JS personnes
 
    return new Personnes(Chaine_tranformer.nom, Chaine_tranformer.prenom, Chaine_tranformer.age, Chaine_tranformer.ville)
   }
}

// Création d'une instance à partir d'une chaine Json
const ChaineJSON = '{"nom": "tata","prenom": "diop","age": 19,"ville": "Dakar"}'
console.log(ChaineJSON);
// Personnes._Transformation(ChaineJSON)

const personne1 = Personnes._Transformation(ChaineJSON);
console.log(personne1);



