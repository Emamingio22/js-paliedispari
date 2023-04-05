
/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
*/


// CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA
const parolaUser = prompt("inserisci una parola");
console.log(parolaUser);

// RICHIAMO LA FUNCTION
const output = wordPalindroma(parolaUser);
console.log(output);





//------------FUNZIONE---------------


 
function wordPalindroma(word) {

    // ARGOMENTO FUNZIONE
    let inputWord = word;

    // USO SPLIT PER DIVIDERE LE LETTERE DELLA PAROLA
    let characters = inputWord.split('');
    console.log(characters);

    // USO REVERSE PER INVERTIRE LE LETTERE
     let revertCharacters = characters.reverse();
     console.log(revertCharacters);

     // GENERO LA PAROLA INVERTITA
    parolaInvertita = revertCharacters.join('');
    console.log(parolaInvertita);
    
     // CON L'IF CONFRONTO LE DUE PAROLE E VEDO SE SONO UGUALI O NO
     if (word == parolaInvertita) {
        return "Parola palindroma";
    }else {
        return "Parola non palindroma;"
    }
}

