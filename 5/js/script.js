// blocco-5: Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.


var lista = [];
var = numero;


for (var i = 0; i < 6; i++) {
  numero = parseInt(prompt('mi dai un numero?'));
  if (numero % 2 !== 0) {
    lista.push(numero);
 }
}
 console.log(lista);
