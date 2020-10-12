#### Zadanie 1

Stwórz funkcję do której przekażesz jako parametr listę elementów o klasie more-divs. Następnie zwróć z tej funkcji tablicę tagów utworzoną na podstawie przekazanego parametru. Wynik wyświetl w konsoli.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="more-divs">
        RAZ
    </div>
    <div class="more-divs">
        DWA
    </div>
    <div class="more-divs">
        TRZY
    </div>
    <script>
        function f(elems) {
            let res = []
            for (let i = 0; i < elems.length; i++) {
                let now = document.createElement("div")
                res.push(now)
            }
            return (res)
        }
        let start = document.getElementsByClassName("more-divs")
        console.log(f(start))
    </script>
</body>

</html>
```

#### Zadanie 2

Stwórz funkcję i przekaż do niej jako parametr element short-list. Następnie wyświetlw konsoli:

1. Kod html wewnętrzny
2. kod html zewnętrzy
3. listę klass elementu w postaci stringu
4. listę klass elementu w postaci tablicy
5. obiekt dataset
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="short-list" class="klasa1 klasa2 klasa3">
        <p>tekst</p>
    </div>
    <script>
        function f(elem) {
            console.log(elem.innerHTML)
            console.log(elem.outerHTML)
            console.log(elem.getAttribute("class"))
            console.log(elem.getAttribute("class").split(" "))
            console.log(elem.dataset)
        }
        let el = document.getElementById("short-list")
        f(el)
    </script>
</body>

</html>
```

#### Zadanie 3

Stwórz funkcję która zwracać będzie wynik dodawania oraz odejmowania liczb pobranych z przekazanych parametrów. Liczby te muszą pochodzić z atrybutów data elementu o id datasetCheck
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="datasetCheck" data="4">

    </div>
    <div id="datasetCheck" data="2">

    </div>
    <script>
        function f(first, second) {
            let add = first + second
            let sub = first - second
            let res = [add, sub]
            return (res)
        }
        let all = document.getElementsByTagName("div")
        let first = parseInt(all[0].getAttribute("data"))
        let second = parseInt(all[1].getAttribute("data"))
        console.log(f(first, second))
    </script>
</body>

</html>
```

#### Zadanie 4

Zmień tekst w elemencie o id spanText na dowolny
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <span id="spanText">Tekst przed zmianą</span>
    <script>
        document.getElementById("spanText").innerText = "Tekst po zmianie"
    </script>
</body>

</html>
```

#### Zadanie 5

Zmień klasę elementowi o id spanText na dowolną
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <span id="spanText">Tekst przed zmianą</span>
    <script>
        document.getElementById("spanText").setAttribute("class", "nowaKlasa")
    </script>
</body>

</html>
```

#### Zadanie 6

Napisz funkcję która przyjmie jako parametr listę klass elementu o id classes. Następnie funkcja powinna wypisać w konsoli pojedynczo wszystkie klasy a na końcu wyświetlić string z połączonych klass znakiem '+'. 
Następnie usuń wszystkie klasy temu elementowi i wypisz w konsoli tekst: "Usunięto wszystkie klasy".
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p id="classes" class="raz dwa trzy"></p>
    <script>
        function f() {
            let classes = document.getElementById("classes").getAttribute("class")
            classes = classes.split(" ")
            for (let i = 0; i < classes.length; i++) {
                console.log(classes[i])
            }
            console.log(classes.join("+"))
            document.getElementById("classes").setAttribute("class", "")
            console.log("Usunięto wszystkie klasy")
        }
        f()
    </script>
</body>

</html>
```

#### Zadanie 7

Znajdź wszystkie elementy li w elemencie longList. Przekaż te elementy do funkcji której zadaniem będzie dodanie każdemu elementowi li atrybutu data-text="text" ale tylko tym elementom w których taki data atrybut nie istnieje.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul id="longList">
        <li>1</li>
        <li data="sth">2</li>
        <li data="sth">3</li>
        <li>4</li>
    </ul>
    <script>
        let all = document.querySelectorAll("#longList li")
        for (let i = 0; i < all.length; i++) {
            let now = all[i].getAttribute("data")
            if (now == null) {
                all[i].setAttribute("data-text", "text")
            }
        }
    </script>
</body>

</html>
```

#### Zadanie 8

Napisz funkcję która będzie przyjmować parametr typu string. Następnie string ten zapisz w postaci obiektu:

{
    newClass: 'string_z_parametru'
}

Obiekt ten przekaż do drugiej funkcji w której odczytasz string z obiektu i przypisz go do zmiennej. Następnie ustaw taką klasę elementowi o id myDiv.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="myDiv"></div>
    <script>
        function f(string) {
            let obj = {
                newClass: string
            }
            f2(obj)
        }

        function f2(obj) {
            let cl = obj.newClass
            document.getElementById("myDiv").setAttribute("class", cl)
        }

        f("nowa klasa")
    </script>
</body>

</html>
```

#### Zadanie 9

Napisz funkcję która będzie dodawać odpowiednią klasę do elementu o id "numbers" w zależności od przekazanego parametru. Parametr powinien być losową liczbą z zakresu 0-10. 
Jeśli liczba będzie parzysta ustaw klasę 'even' jak nieparzysta 'odd;
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="numbers"></div>
    <script>
        function f(num) {
            if (num % 2 == 0) {
                document.getElementById("numbers").setAttribute("class", "even")
            }
            else {
                document.getElementById("numbers").setAttribute("class", "odd")
            }
        }
        f(2)
    </script>
</body>

</html>
```

#### Zadanie 10

Napisz funkcję do której przekaż element o id "longList". Następnie zwróć tablicę wypełnioną wartościami pobranymi z elementów ten listy.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul id="longList">
        <li>
            raz
        </li>
        <li>
            dwa
        </li>
        <li>
            trzy
        </li>
    </ul>
    <script>
        function f(list) {
            let all = list.querySelectorAll("li")
            let res = []
            for (let i = 0; i < all.length; i++) {
                res.push(all[i].innerText)
            }
            return (res)
        }
        let elem = document.getElementById("longList")
        console.log(f(elem))
    </script>
</body>

</html>
```

#### Zadanie 11

Napisz funkcję do której przekażesz listę dzieci elementu o id longList. Następnie zamień wszystkie wartości tych elementów na losowe liczby z zakresu 0-10 jednocześnie przechowując starą wartość w data atrybucie.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul id="longList">
        <li>
            raz
        </li>
        <li>
            dwa
        </li>
        <li>
            trzy
        </li>
    </ul>
    <script>
        function f(list) {
            let all = list.querySelectorAll("li")
            for (let i = 0; i < all.length; i++) {
                let random = Math.floor(Math.random() * 11)
                all[i].setAttribute("data", all[i].innerText)
                all[i].innerText = random
            }
        }
        let elem = document.getElementById("longList")
        console.log(f(elem))
    </script>
</body>

</html>
```
