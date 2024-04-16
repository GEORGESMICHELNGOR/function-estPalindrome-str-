function estAnneeBissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Exemples d'utilisation :
let annee1 = 2020;
let annee2 = 2021;

if (estAnneeBissextile(annee1)) {
    console.log(annee1 + " est une année bissextile.");
} else {
    console.log(annee1 + " n'est pas une année bissextile.");
}

if (estAnneeBissextile(annee2)) {
    console.log(annee2 + " est une année bissextile.");
} else {
    console.log(annee2 + " n'est pas une année bissextile.");
}
