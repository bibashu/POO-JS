// définir une interface comme un objet vide contenant les noms de méthodes et leurs
// signatures de fonctions associées.
const Forme = {
  calculerAire() {
    // console.log("Calcule de l'aire d'ue forme");
  },
};

class Cercle {
  constructor(r) {
    this.r = r;
  }
  calculerAire() {
   
    console.log("l'aire du cercle est: ", this.r * this.r * 3.14);
  }
}
class Rectangle {
  constructor(L, l) {
    this.L = L;
    this.l = l;
  }
  calculerAire() {
    console.log("l'aire du rectangle est: ", this.L * this.l);
  }
}
const cercle1 = new Cercle(6);
const Rectangle1 = new Rectangle(4, 5);
// console.log(cercle1);
cercle1.calculerAire();
Rectangle1.calculerAire();
