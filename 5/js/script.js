// blocco-5: Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.


var lista = [];
// var num = 0;


for (var i = 0; i < 6; i++) {
   var num = parseInt(prompt('mi dai un numero?'));
  if (num % 2 !== 0) {
    lista.push(num);
 }
}
 console.log(lista);
