// blocco-1: L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var numberOne = prompt('inserisci un numero');
var numberTwo = prompt('inserisci un numero');

// devo fare il parseINT
 numberOne = parseInt(numberOne);
 numberTwo = parseInt(numberTwo);


if (numberOne > numberTwo) {
  console.log('numberOne');
}else {
  console.log('numberTwo')
}
