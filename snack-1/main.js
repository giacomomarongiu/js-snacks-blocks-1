console.log("Hello world");

//Due numeri in successione con due promt 
//stampiamo il più alto

//Dichiaro due variabili
//Assegno loro un valore con un promt

const numberOne =  Number(prompt('insert a number'));
console.log(numberOne);

const numberTwo = Number(prompt('insert a number'));
console.log(numberTwo);

//verifico le varie possibilità e stampo
if (numberOne === numberTwo) {
    console.log('numbers are equal');
} else if(numberOne > numberTwo){
    console.log("the first is bigger");
} else {
    console.log("the second is bigger");
}