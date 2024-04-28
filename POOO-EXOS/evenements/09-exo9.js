class EditeurDeTexte {
  constructor() {
    this.texte = "";
    this.ecouteurs = [];
  }

  ajouterEcouteur() {
    const input = document.querySelector(".form-control").value;
    if (input !== '') {
      this.ecouteurs.push(input);

      list.innerHTML = '';

      for (let i = 0; i < this.ecouteurs.length; i++) {
        const itemText = this.ecouteurs[i];
        const divLIST= document.createElement('div')
        const listItem = document.createElement('li');
        const button2 = document.createElement("button");
        divLIST.classList.add('divList')
        button2.classList.add('button')

        listItem.textContent = itemText;
        list.appendChild(divLIST)
        list.appendChild(listItem);
        list.appendChild(button2).innerHTML = "Modifier";

        // Add event listener for each modifier button
        button2.addEventListener('click', () => {
          // Call modifierTexte with the corresponding itemText and listItem
          this.modifierTexte(itemText, listItem);
        });
      }

      if (this.ecouteurs.length >= 5) {
        this.ecouteurs.pop();
      }

      document.querySelector(".form-control").value = '';
    }
    console.log("Ecouteur ajouté");
  }

  modifier(texte) {
    this.texte = texte;
  }

  notifier() {
    alert("Le texte a été modifié avec succès ");
  }

  modifierTexte(text_m, listItem) {
    const newText = prompt("Changer le texte", text_m);
    if (newText !== null) {
      this.modifier(newText);
      console.log("Texte modifié :", newText);
      listItem.textContent = newText; // Mise à jour du contenu du <li> avec le nouveau texte
      this.notifier();
    }
  }
}

const button = document.querySelector(".btn");
const list = document.querySelector(".list");

const evenements1 = new EditeurDeTexte();

button.addEventListener("click", function() {
  evenements1.ajouterEcouteur();
});
