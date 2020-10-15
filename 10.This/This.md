#### Zadanie 1

Utwórz 2 obiekty person i person2. Niech posiadają następujące właściwości:

* Imię
* Nazwisko
* Wiek
* Kraj
* Miasto

Stwórz metody:

1. Która wypiszą wszystkie informacje o tej osobie
2. Która dodaje 1 rok do wieku za każdym jej wywołaniem

Następnie napisz kilka wywołań metody numer 2 w różnych kontekstach tak aby sprawdzić zasadę jej działania.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        let person = {
            imie: "Jan",
            nazwisko: "Kowalski",
            wiek: 45,
            kraj: "Polska",
            miasto: "Warszawa",
            info: function () {
                console.log("Imie: " + this.imie + " Nazwisko: " + this.nazwisko + " Wiek: " + this.wiek + " Kraj: " + this.kraj + " Miasto: " + this.miasto)
            },
            add: function () {
                this.wiek += 1
            }
        }

        let person2 = {
            imie: "Marcin",
            nazwisko: "Nowak",
            wiek: 32,
            kraj: "Polska",
            miasto: "Krakow",
            info: function () {
                console.log("Imie: " + this.imie + " Nazwisko: " + this.nazwisko + " Wiek: " + this.wiek + " Kraj: " + this.kraj + " Miasto: " + this.miasto)
            },
            add: function () {
                this.wiek += 1
            }
        }
        person.info()
        person.add()
        person.info()
        person.add()
        person.add()
        person.info()
        person2.info()
        person2.add()
        person2.info()
        person2.add()
        person2.add()
        person2.info()
    </script>
</body>

</html>
```

#### Zadanie 2

Rozszeż obiekty person i person2 z poprzedniego zadania o nowe pole typu tablicowego, które będzie przetrzymywać ulubione dania danej osoby. Następnie napisz metodę która będzie wypisywać w konsoli zawartość tego pola oraz metodę która będzie dodawać kolejne elementy do tego pola. Wszystkie te rzeczy mają znaleźć się poza pierwotnym ciałem obiektu.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        let person = {
            imie: "Jan",
            nazwisko: "Kowalski",
            wiek: 45,
            kraj: "Polska",
            miasto: "Warszawa",
            info: function () {
                console.log("Imie: " + this.imie + " Nazwisko: " + this.nazwisko + " Wiek: " + this.wiek + " Kraj: " + this.kraj + " Miasto: " + this.miasto)
            },
            add: function () {
                this.wiek += 1
            }
        }

        let person2 = {
            imie: "Marcin",
            nazwisko: "Nowak",
            wiek: 32,
            kraj: "Polska",
            miasto: "Krakow",
            info: function () {
                console.log("Imie: " + this.imie + " Nazwisko: " + this.nazwisko + " Wiek: " + this.wiek + " Kraj: " + this.kraj + " Miasto: " + this.miasto)
            },
            add: function () {
                this.wiek += 1
            }
        }
        person.ulubioneDania = []
        person2.ulubioneDania = []
        let show = function () {
            console.log(this.ulubioneDania)
        }
        let add = function (nowe) {
            this.ulubioneDania.push(nowe)
        }
        person.show = show
        person.add = add
        person2.show = show
        person2.add = add
        person.add("ryba")
        person.show()
        person2.add("pizza")
        person2.add("spaghetti")
        person2.show()
    </script>
</body>

</html>
```

#### Zadanie 3

Napisz kalkulator który będzie miał funkcję dodawania, odejmowania, mnożenia i dzielenia. Potrzebne metody:

1. Metoda zapisująca liczby a i b w kontekście obiektu
2. Metoda sumująca wcześniej zapisane liczby
3. Metoda odejmująca wcześniej zapisane liczby
4. Metoda mnożąca wcześniej zapisane liczby
5. Metoda dzieląca wcześniej zapisane liczby. Jeśli liczba b = 0 to wypisz w konsoli odpowiedni komunikat błędu.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        let calc = {
            a: 0,
            b: 0,
            res: 0,
            addData: function (a, b) {
                this.a = a
                this.b = b
            },
            add: function () {
                this.res = this.a + this.b
            },
            sub: function () {
                this.res = this.a - this.b
            },
            mul: function () {
                this.res = this.a * this.b
            },
            div: function () {
                if (this.b != 0) {
                    this.res = this.a / this.b
                }
                else {
                    console.log("Nie mozna dzielic przez 0")
                }
            }
        }
    </script>
</body>

</html>
```

#### Zadanie 4

Stwórz prosty symulator wchodzenia i schodzenia z drabiny. Potrzebne będą trzy metody. Zastanów się jakie?
