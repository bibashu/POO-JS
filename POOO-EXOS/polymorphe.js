// définir une interface comme un objet vide contenant les noms de méthodes et leurs
// signatures de fonctions associées.
class Forme {
  constructor(rayon, Longueur, largueur) {
    this.r = rayon;
    this.Long = Longueur;
    this.larg = largueur;
  }

  calculerAire() {
    console.log("Calcule de l'aire d'une forme");
  }
}

class Cercle extends Forme {
  constructor(rayon) {
    super(rayon, null, null);
  }
  calculerAire() {
    super.calculerAire();
    console.log("l'aire du cercle est: ", Math.pow(this.r, 2) * 3.14);
  }
}
class Rectangle extends Forme {
  constructor(Longueur, largueur) {
    //je passe null pour le rayon car il n'est pas utilisé pour le rectangle

    super(null, Longueur, largueur);
  }
  calculerAire() {
    super.calculerAire();

    console.log("l'aire du rectangle est: ", this.Long * this.larg);
  }
}
const cercle1 = new Cercle(6);
const Rectangle1 = new Rectangle(25, 5);
// console.log(cercle1);
cercle1.calculerAire();
Rectangle1.calculerAire();
