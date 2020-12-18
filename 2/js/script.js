// blocco-2: L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


var first = prompt ('inserisci la parola');
var second = prompt ('inserisci la parola');

if (first > second) {
  console.log (second + ' ' + first);
}

else if (first < second) {
  console.log( first + ' ' + second );
}

else {
    console.log( 'hola');
}
