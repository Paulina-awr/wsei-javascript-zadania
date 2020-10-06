// Zadanie 1
console.log("Udało się!");

// Zadanie 2
function greet(person) {
  console.log("Hello " + person);
}
greet("Mia");
console.log("Bye");

// Zadanie 3
function myArrFunc(myArray) {
   console.log(myArray);
}

var myArr = ['a', 'b', 'c', 'd']
myArrFunc(myArr)

// Zadanie 4
let i = 1;
const intervalId = setInterval(() => {
    console.log("Hello World");
    i += 1;
    if (i > 5) {
        console.log("Koniec");
        clearInterval(intervalId);
    }
}, 3000);
