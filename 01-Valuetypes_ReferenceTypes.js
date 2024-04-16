// Value types (primiive types)
// [number, string, Boolean, symbol,Null, undifined]
let x = 10;
let y = x;
console.log(x,y)
x =20
console.log(x,y)

// reférences types ---- types de référence[objet, array]

let a = {valeur: 20}
let b =a
console.log(a, b)
a.valeur = 30
console.log(a, b)