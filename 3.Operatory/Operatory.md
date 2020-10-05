#### Zadanie 1

W konsoli stwórz dwie zmienne i przypisz do nich dwie wartości boolean. Porównaj je za pomocą odpowiedniego operatora.

let hot = true;
let cold = false;

console.log(hot == cold);



#### Zadanie 2

W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne liczby, a trzecia o nazwie ```moduloResult``` niech przechowuje liczbę 0. Oblicz resztę z dzielenia (modulo) tych liczb i zapisz wynik w zmiennej ```moduloResult```.
Wypisz zmienną ```moduloResult``` w konsoli. 

let first = 7;
let second = 5;
let moduloResult = 0;

moduloResult = first % second;
console.log(moduloResult);


#### Zadanie 3
W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne stringi, a jedna o nazwie ```stringsResult```, niech przechowuje pusty string np. ```let stringsResult = ""```
Połącz stringi za pomocą konkatenacji i zapisz wynik w zmiennej ```stringsResult``` oraz wypisz go w konsoli.

var someNumber = "42";
var someString = "345";
let stringsResult = ""
stringsResult = someNumber + someString
console.log(stringsResult);


#### Zadanie 4
W konsoli stwórz dwie zmienne:

 ``` JavaScript
var someNumber = 425;
var someString = "425";
 ```
 var someNumber = 425;
var someString = "425";
console.log(someNumber == someString);    Jest TRUE, poniewaz zmienne maja taka sama wartosc.
console.log(someNumber === someString);    Jest FALSE , poniewaz maja dwa rozne typy. Jedna zmienna jest int, a druga zmienna string.


Porównaj te zmienne za pomocą operatorów ```==``` oraz ```===```.
Wypisz wyniki w konsoli. Opowiedz grupie o wynikach


#### Zadanie 5

W konsoli stwórz zmienną o nazwie ```counter```. Wstaw do niej liczbę 30.
Wypisz jej wartość w konsoli, a następnie:

* za pomocą inkrementacji zwiększ wartość zmiennej ```counter```
* wypisz ją w konsoli
* za pomocą dekrementacji zmniejsz wartość zmiennej ```counter```
* wypisz ją w konsoli.

let counter = 30;

console.log(counter);

counter++;

console.log(counter);

counter--;

console.log(counter);

#### Zadanie 6

W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne liczby, a jedna o nazwie ```result```, niech przechowuje ```null```. Sprawdź czy liczba pierwsza jest większa od drugiej za pomocą odpowiedniego operatora i zapisz wynik w zmiennej ```result```. Wypisz tą zmienną w konsoli.

let variable_1 = 40;
let variable_2 = 23;
let result = null;

result = variable_1 > variable_2;

console.log(result);


