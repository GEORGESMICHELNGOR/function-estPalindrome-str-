function estPalindrome(str) {
    
    function nettoyerChaine(str) {
        return str.toLowerCase().replace(/[\W_]/g, ''); 
    }
    function estPalindromeRec(chaineNettoyee) {
       
        if (chaineNettoyee.length <= 1) {
            return true;
        }

        
        if (chaineNettoyee[0] === chaineNettoyee[chaineNettoyee.length - 1]) {
            
            return estPalindromeRec(chaineNettoyee.slice(1, chaineNettoyee.length - 1));
        } else {
            return false;
        }
    }

    
    const chaineNettoyee = nettoyerChaine(str);

    
    return estPalindromeRec(chaineNettoyee);
}


console.log(estPalindrome("A man, a plan, a canal, Panama")); 
console.log(estPalindrome("race car")); 
console.log(estPalindrome("hello")); 