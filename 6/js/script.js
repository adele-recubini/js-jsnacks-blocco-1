// blocco-6: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
//

var number = parseInt(prompt('scegli un numero '));
for (var i = 1; i <= number; i++) {
  console.log(Math.pow(i,3));
}
