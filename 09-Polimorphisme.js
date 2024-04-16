// Polimorphisme : capacité d'un objet à prendre plusieurs forme

class User {
    constructor(noms){
        this.noms = noms
    }
    login() {
        console.log(`${this.noms} est connectées en tant qu'utilisateur`)
    }
}
class Admin extends User {
    login() {
        super.login()
        console.log(`${this.noms} est connectées en tant qu'admin`)
    }
}
const user1 = new User('Aby')
const admin = new Admin('toto')
user1.login()
admin.login()
console.log(user1)