// Factory function: c'est ue maquette (model) pour creer des objets
// création d'un modéle avec la function utilisateur 
const utilisateur = (noms, email, ...amis) => {
    return {
        noms, email, amis,
        login(){
            console.log(`${this.email} est connectées`)
        },
        logout(){
            console.log(`${this.email} est deconnectées`)
        }
    }

}
const utili = utilisateur ('Aby', 'aby@gmail.com', 'toto', 'tata')
const utili2 = utilisateur ('tata', 'tata@gmail.com', 'tata')
console.log(utili)
console.log(utili2)