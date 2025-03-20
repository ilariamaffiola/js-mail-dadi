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
let player2= 'Computer';
console.log(player1);
console.log(player2);
//essendoci due giocatori devo creare due variabili per i due dadi (cioè i due giocatori)
//creo la variabile del dado del giocatore 1
let dado1 = Math.floor(Math.random()*6)+1;
console.log(dado1);
//creo la variabile del dado del giocatore 2
let dado2 = Math.floor(Math.random()*6)+1;
console.log(dado2);
alert('Player 1 ha lanciato il dato e ha ottenuto' + ' ' + dado1 + ' ' + 'Computer ha lanciato il dado e ha ottenuto' + ' ' + dado2);





