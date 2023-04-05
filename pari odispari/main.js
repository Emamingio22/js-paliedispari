/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// CHIEDO ALL'UTENTE DI SCEGLIERE PARI O DISPARI
    let evenOrOdd = prompt("pari o dispari?");
    console.log("hai scelto: ",evenOrOdd);


    let sceltaUtente;

    if(evenOrOdd === "pari"){
        sceltaUtente = true;
    } else if(evenOrOdd === "dispari"){
        sceltaUtente = false;
    }

// CHIEDO ALL'UTENTE DI SCEGLIERE UN NUMERO DA 1 A 5
    let numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));
    console.log("hai scelto il numero: ",numeroUtente);

// CHIEDO AL COMPUTER DI GENERARE UN NUMERO DA 1 A 5
    let numeroRandom = genNumRandom(1, 5);

// SOMMO I DUE NUMERI (UTENTE E COMPUTER)
    let somma = numeroUtente + numeroRandom;

    console.log("il computer ha scelto il numero",numeroRandom );
    console.log("la somma dei numeri è: ",somma);

// SE LA SCELTA è UGUALE ALLA FUNZIONE numEven L'UTENTE HA VINTO
    if(sceltaUtente == numeroPari(somma)){
        console.log("HAI VINTO, COMPLIMENTI!!");
    } else {
        console.log("HAI PERSO, RIPROVA!!");
    }




// ----------FUNZIONI-----------

// FUNZIONE PER GENERARE I NUMERI CASUALI
    function genNumRandom(min, max){
        return Math.floor(Math.random() * (max - min) + min);
        
    }


// FUNZIONE NUMERO PARI
    function numeroPari(numF){
        if(numF % 2 == 0){
            return even = true;
        } else {
            return even = false;
        }
    }

