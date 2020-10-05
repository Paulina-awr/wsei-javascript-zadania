#### Zadanie 1

W konsoli stwórz dwie zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej ```if ... else ```, wypisz w konsoli, która z nich jest większa.

let p1 = 3;
let p2 = 4;
if(p1>p2) {
    console.log(p1);
} else if(p1==p2);{
    console.log("Sa rowne");
} else {
    console.log(p2);
}


#### Zadanie 2

W konsoli stwórz trzy zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej **if**, **else if** i **else**
wypisz w konsoli, która z nich jest największa.

let p1 = 3;
let p2 = 4;
let p3 = 6;
if (p1>p2 && p1>p3) {
    console.log(p1);
} else if (p2>p3 && p2>p1) {
    console.log(p2);
} else {
    console.log(p3);
}
  


#### Zadanie 3
W konsoli stwórz pętle, która 10 razy wypisze w konsoli tekst "Lubię JavaScript".

for ( var i = 1; i <= 10; i++) {
	console.log("Lubie JavaScript");
}
#### Zadanie 4
W konsoli stwórz zmienną ```result``` i przypisz do niej liczbę 0. Następnie stwórz pętle, która doda do siebie liczby od 1 do 10.

let result = 0;
for (let i = 1; i<10; i++){
  result += i;
} 

console.log(result);


#### Zadanie 5
W konsoli napisz program, który na podstawie wartości zmiennej np. ```var n = 5;``` wypisuje wszystkie liczby od zera do **n**.
Przy każdej liczbie program ma napisać, czy  liczba jest parzysta czy nie. Np.:

```JavaScript
0 – parzysta
1 – nieparzysta
2 – parzysta
3 – nieparzysta
...
```
for (let n = 0; n<5; n++){
  if (n%2 == 0){
        
        console.log( n + " parzysta");
    } else {
        console.log( n + " nieparzysta");
    }
}

#### Zadanie 6
W konsoli stwórz dwie pętle niezależne i wypisz wartości ich liczników w każdej iteracji. Wykorzystaj:
konkatenację np.

```JavaScript 
console.log("i= " + i + ", j= " + j);
```
for (let i = 0; i<5; i++){
 for (let j =0; j<5; j++){
     
     console.log("i= " + i + ", j = " + j);
        
      
    }
}

#### Zadanie 7

FizzBuzz - wypisz w consoli liczby od 0 do 100. Zamiast każdej podzielnej liczby przez 3 wypisz "Fizz", zamiast każdej podzielnej liczby przez 5 wypisz "Buzz" a zamiast każdej podzielnej liczby przez 3 i przez 5 wypisz "FizzBuzz"

Przykład:

```
0 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz ....
```
for (let i = 0; i<100; i++){
    if(i % 15 == 0){
      console.log(" FizzBuzz");  
    } else if (i % 3 == 0){
        console.log(" Fizz")
    }else if (i % 5 ==0){
        console.log(" Bizz")
    }
}
   console.log(i)

#### Zadanie 8

Narysuj w konsoli:

a)
```
*
**
***
****
*****
``` 

const star = "*"
for (let i = 0; i < 6; i++) {
    let result = '';
    for(let j = 0; j < i; j++) {
        result +=star;
    }
    console.log(result)
}



b)
```
    *
   * *
  * * *
 * * * *
* * * * *
```

c)
```
    *
   ***
  *****
 *******
*********
```

d)
```
*1234
**234
***34
****4
*****
-----
*****
****4
***34
**234
*1234
```

e)
```
    *
   * *
  * * *
 * * * *
* * * * *
    *
    *
    *
```
