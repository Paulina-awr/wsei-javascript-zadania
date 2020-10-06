#### Zadanie 1

Napisz funkcję która wypisuje w konsoli "Udało się!"

#### Zadanie 2

Napisz funkcję która przyjmuje dowolny parametr i wyświetla go w konsoli

function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

#### Zadanie 3

Napisz funkcję która przyjmuje jako parametr tablicę a następnie zwraca ją.

function number ([a,b,c,d] ){
  console.log(a,b,c,d);
}

number([1,2,3,4])

#### Zadanie 4

Napisz funkcję która przyjmie jako argument stringa a następnie co 3 sekundy będzie go wypisywać w konsoli. Po 5 razach ma przestać wypisywanie i zwrócić do konsoli napiś "Koniec".

let counter = 0;
const intervalId = setInterval(() => {
  console.log('Hello World');
  counter += 1;
if (counter === 6) {
    console.log('Done');
    clearInterval(intervalId);
  }
}, 3000);
