/**
 * 
 * Write a program that prompts for a word or sentence 
 * (it can be capitalized, have spaces and punctuation). 
 * Figure out if the sentence/word is a palindrome or not. 
 * Ignoring punctuation, spaces and capitalized letters.
 * 
 */

function palindrome(word) {
    const palindrom = deletSpace(word).toLowerCase();
    word = word.replace(/[^a-zA-z]/g, '').toLowerCase();
    if (palindrom == word) {
        console.log('El texto ingresado es palindromo');
    } else {
        console.log('El texto ingresado NO es palindromo');
    }
}

function deletSpace(aux) {
    const letters = aux.replace(/[^a-zA-z]/g, '');
    const investText = investString(letters);
    console.log('Texto original: ' + aux);
    console.log('Texto invertido: ' + investText);
    return investText;
}

function investString(aux) {
    return aux.split('').reverse().join('');
}