#### Zadanie 1

Stwórz konstruktor Person z następującymi właściwościami:

1. Imię
2. Nazwisko
3. Wiek
4. Kraj
5. Miasto
6. Język

Wszystkie te właściwości powinny pochodzić z parametrów przekazanych przez użytkownika w wywołaniu konstruktora. Następnie dopisz metody które będą modyfikować wiek oraz miasto. Pamiętaj o reużywalności kodu i oszczędzaniu pamięci. Wywołaj konstruktor Person na minimum 5 różnych osobach. Następnie zmień im wiek oraz miasto i sprawdź jak zachowują się obiekty.
```
function Person(imie, nazwisko, wiek, kraj, miasto, jezyk) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wiek = wiek;
    this.kraj = kraj;
    this.miasto = miasto;
    this.jezyk = jezyk;
    this.changeWeik = function (newWiek) {
        this.wiek = newWiek;
    };
    this.changeMiasto = function (newMiasto) {
        this.miasto = newMiasto;
    };
}

var person1 = new Person("John", "Doe", 50, "Polska", "Krakow", "Polski");
console.log(person1)

var person2 = new Person("Konrad", "Kita", 34, "Polska", "Warszawa", "Polski");
console.log(person2)

var person3 = new Person("Barbara", "Nowak", 67, "Polska", "Poznan", "Polski");
console.log(person3)

var person4 = new Person("Wojtek", "Mark", 12, "Polska", "Lodz", "Polski");
console.log(person4)

var person5 = new Person("Marta", "Czowiek", 23, "Polska", "Kielce", "Polski");
console.log(person5)

person1.changeWeik(30)
console.log(person1)

person1.changeMiasto("Warszawa")
console.log(person1)
```

#### Zadanie 2

Stwórz konstruktor kalkulatora z czterema podstawowymi działaniami. Konstruktor powinien posiadać pamięć operacji oraz metody do odpowiednich działań. Dopisz również metodę wypisującą zawartość pamięci oraz czyszczącą zawartość pamięci kalkulatora. Stwóz na podstawie konstruktora minimum dwa niezależne kalkulatory.


#### Zadanie 3( gra )

Stwórz konstruktor z dwoma metodami. Jedna co sekundę ma zminiać zawartość pola typu number na losową liczbę z zakresu 1-10. Druga ma sprawdzać czy liczba jest większa o 5. Jeśli tak to program ma zakończyć działanie. Obie metody muszą być wywołane na różnych obiektach i wymianiać dane przy pomocy pola prototype.
