console.log("Hello world");

//Due numeri in successione con due promt 
//stampiamo il più alto

//Dichiaro due variabili
//Assegno loro un valore con un promt

const numberone= Number(prompt('inserisci un numero'));
console.log(numberone);

const numbertwo= Number(prompt('inserisci un numero'));
console.log(numbertwo);

if (numberone===numbertwo) {
    console.log('i numeri sono uguali');
} else if(numberone>numbertwo){
    console.log("the first is bigger");
} else {
    console.log("the second is bigger");
}