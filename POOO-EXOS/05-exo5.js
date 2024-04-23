class Adresse{
    constructor(rue, ville, codePostal){
        this.rue = rue
        this.ville = ville
        this.codePostal = codePostal
    }
}


class Personness{
    constructor(nom, age, rue, ville, codePostal){
// La classe Personness a désormais accès à la variable sans hériter de la classe Adresse.

        this.adresse = new Adresse(rue, ville, codePostal)
        this.nom =nom
        this.age =age
    }
}

// const AdresseToto = new Adresse()
const Citoyen = new Personness("Toto", 25,"34", "Dakar", 20155)

console.log(Citoyen.adresse.ville);
