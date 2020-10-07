#### Zadanie 1

Stwórz tablicę z dowolnymi elementami a następnie wypisz je w konsoli.

```
myArr = [2, 4, 6, "Krakow", "Warszawa", 'Poznan']
console.log('my array is', myArr)
```

#### Zadanie 2

Stwórz tablicę z dowolnymi elementami a następnie w konsoli wypisz:

1. Pierszy i drugi element
2. Ostatni element
3. Wszystkie elementy
4. Co drugi element
5. Wszystkie stringi
6. Wszystkie numbery 

```
let myArr = [2, 4, 6, "Krakow", "Warszawa", 'Poznan']

// 1. Pierszy i drugi element
console.log("my first and second elements are:", 
            myArr[0] + ' and ' + myArr[1])
// 2. Ostatni element
console.log("my last element is: ", myArr[myArr.length-1])
// 3. Wszystkie elementy
console.log("All elements in the array: ", myArr)
// 4. Co drugi element
newArr = myArr.filter(function(value, index, Arr) {
    return index % 2 == 0;
});
console.log("Every second elements are", newArr)
// 5. Wszystkie stringi
let myArr = [2, 4, 6, "Krakow", "Warszawa", "Poznan"];
emptyArr = []
var i;
for (i = 0; i < myArr.length; i++) {
    if (typeof myArr[i] === "string") {
        emptyArr.push(myArr[i])
    }
}
console.log(emptyArr)
// 6. Wszystkie numbery
myArr = [2, 4, 6, "Krakow", "Warszawa", "Poznan"];
emptyArr = []
var i;
for (i = 0; i < myArr.length; i++) {
    if (typeof myArr[i] === "number") {
        emptyArr.push(myArr[i])
    }
}
console.log(emptyArr)
```

#### Zadanie 3

Stwórz tablicę tylko z elementami typu number. W konsoli wypisz:

1. sumę wszystkich elementów
2. różnicę wszystkich elementów
3. średnią wszystkich elementów
4. elementy parzyste
5. elementy nieparzyste
6. największą liczbę
7. najmniejszą liczbę
8. wypisz tablicę od tyłu

* nie rozpatrujemy warunków brzegowych. Liczby nie powtarzają się.
```
let myArr = [1, 5, 6, 8, 11, 12, 13, 16, 18];
// 1. sumę wszystkich elementów
const sum = myArr.reduce((a, b) => a + b, 0);
console.log(`The sum is: ${sum}.`);

// 2. różnicę wszystkich elementów
console.log("my last element is: ", myArr[myArr.length-1])

// 3. średnią wszystkich elementów
const avg = (sum / myArr.length) || 0;
console.log(`The average is: ${avg}.`);

// 4. elementy parzyste
let evenArr = [];
for (var i = 0; i < myArr.length; i++) {
    if(myArr[i] % 2 === 0) { // index is even
        evenArr.push(myArr[i]);
    }
}
console.log(`The even numbers are: ${evenArr}.`);

// 5. elementy nieparzyste
let oddArr = []
for (var i = 0; i < myArr.length; i++) {
    if(myArr[i] % 2 === 1) { // index is even
        oddArr.push(myArr[i]);
    }
}
console.log(`The odd numbers are: ${oddArr}.`);

// 6. największą liczbę
var max_num = Math.max.apply(Math, myArr);
console.log(`The max number is: ${max_num}.`);

// 7. najmniejszą liczbę
var min_num = Math.min.apply(Math, myArr);
console.log(`The min number is: ${min_num}.`);

// 8. wypisz tablicę od tyłu
var reverse_myArr = myArr.reverse();
console.log(`The reverse array is: ${reverse_myArr}.`);
```

#### Zadanie 4

Napisz funkcję która przyjmie jako parametr tablice liczb. Zwróć do konsoli sumę wszystkich liczb.


#### Zadaie 5

Napisz funkcję która przyjmuje jako parametr tablicę liczb. Następnie wypisz w konsoli wszystkie elementy tej tablicy pomnożone przez średnią tablicy

#### Zadanie 6

Napisz funkcję która zwraca średnią liczb parzystych z tablicy którą przekażesz jako parametr tej funkcji.

#### Zadanie 7

Posortuj tablicę przekazaną jako parametr do funkcji. Wypisz ją w konsoli

#### Zadanie 8

Napisz funkcję która będzie zwracać tablicę która będzie sumą indeksów dwóch tablic przekazanych jako parametry funkcji.

#### Zadanie 9

Napisz funkcję która przyjmie jako parametr tablice oraz element tablicy. Następnie funkcja ma zwrócić nową tablicę na podstawie pierwszego parametru ale bez elementu z drugiego parametru

#### Zadanie 10

Napisz funkcję która przyjmuje jako parametr tablicę z numberami a następnie zwraca nową tablicę na podstawie parametru gdzie każdy element tablicy ma odwrotny znak.
