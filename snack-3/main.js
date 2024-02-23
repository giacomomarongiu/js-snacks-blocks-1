//Dichiaro un array con all'interno una serie di stringhe
let names = ['fabio', 'caterina',
    'filippa', 'simona'];

//Dichiaro una variabile 
let user_name = prompt('insert name');

//Assegno a questa variabile un valore tramite input

console.log("Hai inserito i seguenti valori", user_name);

//Confronto ogni elemento dell'array con l'input

for (let index = 0; index < names.length; index++) {

    // SE è tra i miei array -> True
    // ->  Non mi interessa continuare e faccio finire l'iter
    if (user_name == names[index]) {
        console.log('benvenuto');
        index = names.length;
    }
    //SE NO -> False e continuo l'iter
    else {
        console.log("vattene via")
    }}