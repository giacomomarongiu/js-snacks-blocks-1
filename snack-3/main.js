//Dichiaro un array con all'interno una serie di stringhe
let names = ['fabio', 'caterina',
    'filippa', 'simona'];

//Dichiaro una variabile //Assegno a questa variabile un valore tramite input
let user_name = prompt('insert name');

console.log("Hai inserito i seguenti valori", user_name);

//Confronto ogni elemento dell'array con l'input
result ="vattene via";
for (let index = 0; index < names.length; index++) {
    // SE è tra i miei array -> True
    // ->  Non mi interessa continuare e faccio finire l'iter
    if (user_name === names[index]) {
        result='benvenuto';
        index = names.length;
    }
}
console.log(result);