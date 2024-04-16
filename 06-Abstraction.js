// Abstraction: se baser sur l'essentielle et non sur les détails

function Employe(noms, age, sexe, salaire) {
  this.noms = noms;

  this.age = age;
  this.sexe = sexe;
  this.salaire = salaire;
  const allocation = 70000
  const primeRisque = 100000
  const calculSalaire = function(){
    console.log(`Le salaire final: ${salaire + allocation + primeRisque}`)
  }
  this.infoEmploye = function () {
    console.log(`Noms: ${this.noms} `);
    console.log(`Age: ${this.age} `);
    console.log(`Sexe: ${this.sexe} `);
    console.log(`Salaire: ${this.salaire} `);
    calculSalaire()
    console.log('')
  };
}
const empl = new Employe("Aby", 24, "F", 250000);
const emp2 = new Employe("toto", 30, "M", 2500000);
const emp3 = new Employe("tata", 34, "F", 300000);

empl.infoEmploye()
emp2.infoEmploye()
emp3.infoEmploye()