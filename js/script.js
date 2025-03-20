//MAIL
// creare l'array per la lista di email di invitati alla festa
let mails = ['im02@gmail.com' , 'marcobianchi@libero.it' , 'salvatoreavarzulla@outlook.com' , 'mariorossi@hotmail.com' , 'loremipsum@lorem.it' , 'rebeccalol@libero.it' , 'ciaociao@gmail.com'];
console.log(mails);
//dichiarare un prompt per chiedere all'utente la sua email
let email = prompt('Inserisci la tua email');
console.log(email);
//controllare che l'email sia presente nell'array
let emailcheck= false;
for (let i=0 ; i<mails.length ; i++){
    if (mails [i] === email){
        emailcheck = true;
    }
}
//stampare un messaggio appropriato sull'esito del controllo
if (emailcheck === true){
    console.log('Sei stato invitato alla festa');
}
else{
    console.log('Non sei stato invitato alla festa');
}

//GIOCO DEI DADI
//immagino che ci siano due giocatori che lanciano un dado a testa
let player1= 'Ciccio';
let player2= 'pc';
console.log(player1);
console.log(player2);
//essendoci due giocatori devo creare due variabili per i due dadi (cioè i due giocatori)
//creo la variabile del dado del giocatore 1
let dado1;
//creo la variabile del dado del giocatore 2
let dado2;
//dovrei mettere un array con numeri da 1 a 6 per simulare il lancio del dado
let diceNumbers = [1, 2, 3, 4, 5, 6];
console.log(diceNumbers);
//dovrei ciclare l'array per generare un numero casuale tra 1 e 6
for(let i=0; i<diceNumbers.length; i++){
    
}
//creo un if per stabilire chi è il vincitore
//creo un alert per comunicare il vincitore
//creo un alert per comunicare il risultato del lancio dei due dadi


