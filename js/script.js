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

