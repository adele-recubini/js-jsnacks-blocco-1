// blocco-4: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// creo una lista

var invitati = ['adele' , 'carlo' , 'michele'];
// faccio la domanda all utente
var nome = prompt ('il tuo nome?');
// creo la variabili flag che è sempre false
var flag = false;



for (var i = 0; i < invitati.length; i++) {
  if  (nome === invitati[i]){
    var flag = true
  }

  if (flag) {
    console.log('entra');
  }

  else {
    console.log('no');
  }
}


// fare la stessa cosa con l' index of cioe se io dico che nella lista invitati il nome inserito è -1 significa dire che non esiste quindi non entra altrimenti entra


if (invitati.indexOf(nome) ===  -1) {
  console.log('no');
}else {
  console.log('entra');
}
