console.log('Second ex verified');

//due parole in successione
//stampo prima la parola più lunga e poi quella più corta

const first = prompt("inserisci un testo");
console.log(first);
const second = prompt("inserisci un testo");
console.log(second);

if (first.length>second.length){
    console.log("Eccole in ordine");
    console.log(first);
    console.log(second);
} else if(first.length<second.length){
    console.log("Eccole in ordine");
    console.log(second);
    console.log(first);
} else console.log("Le parole sono lunghe uguali");