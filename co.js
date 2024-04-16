function puissance(base, exposant) {
    
    if (exposant === 0) {
        return 1;
    }
    
   
    if (exposant > 0) {
        return base * puissance(base, exposant - 1);
    }
    
    
    if (exposant < 0) {
        return (1 / base) * puissance(base, exposant + 1);
    }
}


console.log(puissance(2, 3)); // Résultat attendu : 8 (car 2^3 = 2 * 2 * 2 = 8)
console.log(puissance(5, 0)); // Résultat attendu : 1 (car toute valeur à la puissance 0 est égale à 1)
console.log(puissance(3, -2)); // Résultat attendu : 0.111... (car 3^-2 = 1 / (3 * 3) = 0.111...)
