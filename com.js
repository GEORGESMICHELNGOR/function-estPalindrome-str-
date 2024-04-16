function determinerPrixBillet() {
    
    let age = prompt("Veuillez entrer votre âge :");

   
    age = parseInt(age);

    
    let prix;

    if (age <= 12) {
        prix = 10;
    } else if (age >= 13 && age <= 17) {
        prix = 15; // Adolescents (13 à 17 ans)
    } else if (age >= 18) {
        prix = 20; // Adultes (> = 18 ans)
    } else {
       
        console.log("L'âge entré n'est pas valide.");
        return; 
    }

   
    console.log(`Le prix du billet pour une personne de ${age} ans est de ${prix} $.`);
}

// Appeler la fonction pour déterminer le prix du billet
determinerPrixBillet();
