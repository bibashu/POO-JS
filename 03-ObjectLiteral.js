// encapsulation

const utilisateur = {
  nom: "Aby",
  email: "Aby@gmail.com",
  amis: ["tata", "toto"],
  login() {
    console.log(`${this.email} est connectées`);
  },
  logout() {
    console.log(`${this.email} est deconnectées`);
  },
};
console.log(utilisateur)

// accés au propriété d'un objet
console.log(utilisateur.nom)
// autre methode
console.log(utilisateur['nom'])

utilisateur.nom ='tototo'
utilisateur['email'] ='tot@gmail.com'
console.log(utilisateur)