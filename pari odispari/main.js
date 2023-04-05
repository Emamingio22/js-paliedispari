/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// CHIEDO ALL'UTENTE DI SCEGLIERE PARI O DISPARI
let evenOrOdd = prompt("pari o dispari?");
console.log(evenOrOdd);


let sceltaUtente;

if(evenOrOdd === "pari"){
    sceltaUtente = true;
} else if(evenOrOdd === "dispari"){
    sceltaUtente = false;
}

// CHIEDO ALL'UTENTE DI SCEGLIERE UN NUMERO DA 1 A 5
let numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));
console.log(numeroUtente);

// CHIEDO AL COMPUTER DI GENERARE UN NUMERO DA 1 A 5
let numeroRandom = genNumbRandom(1, 5);
