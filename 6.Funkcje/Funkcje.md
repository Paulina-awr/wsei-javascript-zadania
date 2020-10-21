#### Zadanie 1

Napisz funkcję która wypisuje w konsoli "Udało się!"

```
function text(){
    console.log('Udalo sie')
}
text();
```

#### Zadanie 2

Napisz funkcję która przyjmuje dowolny parametr i wyświetla go w konsoli

```
function printParam(str){
    console.log(str);
}
printParam('Hello');
```

#### Zadanie 3

Napisz funkcję która przyjmuje jako parametr tablicę a następnie zwraca ją.

```
function myArrFunc(myArray) {
   console.log(myArray);
}

var myArr = ['a', 'b', 'c', 'd']
myArrFunc(myArr)
```

#### Zadanie 4

Napisz funkcję która przyjmie jako argument stringa a następnie co 3 sekundy będzie go wypisywać w konsoli. Po 5 razach ma przestać wypisywanie i zwrócić do konsoli napiś "Koniec".

```
let i = 1;
const intervalId = setInterval(() => {
    console.log("Hello World");
    i += 1;
    if (i > 5) {
        console.log("Koniec");
        clearInterval(intervalId);
    }
}, 3000);
```
