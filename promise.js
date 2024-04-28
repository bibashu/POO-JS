const promesse = new Promise((resolve, reject) =>{
  const aleatoire = Math.trunc(Math.random()*10) + 1;
  console.log(aleatoire);
  if(aleatoire <=6){
    resolve("Entre 1 et 6")
  }else{
    reject("Entre 6 et 10")
  }
})
console.log(promesse);
promesse.then((txt) => {
   console.log(txt);
}).catch((txt)=>{
  console.log(txt);
})