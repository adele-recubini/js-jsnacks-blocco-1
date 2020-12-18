// 8: Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

var number = prompt ('scegli un numero di 4 cifre');
var somma = 0

if (number.length > 4  || number.length < 4 ) {
  alert ('il numero non è di 4 cifre')
} else {
  for (var i = 0; i < number.length; i++) {
    somma += parseInt(number[i])
  }
  console.log('la somma delle cifre inserite è' + somma );
}
