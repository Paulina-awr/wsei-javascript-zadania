#### Zadanie 1

Wyszukaj na stronie wszystkie elementy o klasie list i zapisz wynik do odpowiedniej zmiennej
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="list"></div>
    <div class="list"></div>
    <p></p>
    <p class="list"></p>
    <div></div>
    <script>
        let lists = document.getElementsByClassName("list")
        console.log(lists)
    </script>
</body>

</html>
```

#### Zadanie 2

Stwórz funkcję która będzie zwracać elementy(tagi) na podstawie podstawie przesłanego parametru. Wynik działania funkcji zapisz do zmiennej i wyświetl w konsoli.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div></div>
    <p></p>
    <ul></ul>
    <ul></ul>
    <p></p>
    <div></div>
    <script>
        let f = function (tagName) {
            let res = document.getElementsByTagName(tagName)
            return res
        }
        let res = f("ul")
        console.log(res)
    </script>
</body>

</html>
```

#### Zadanie 3

Znajdź na stronie element listy od id="list" i zapisz do odpowiedniej zmiennej. 
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul id="list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
    <script>
        let li = document.getElementById("list").children
        console.log(li)
    </script>
</body>

</html>
```

#### Zadanie 4

Napisz funkcje która będzie wypisywać w konsoli elementy przekazane w parametrze. Do funkcji przekaż następujące elementy:

1. wszystkie elementy li na stronie
2. wszystkie elementy ul na stronie
3. wszystkie spany na stronie
4. wszystkie spany znajdujące się w elemencie div z klasą list
5. wszystkie spany znajdujące się w elemencie div który posiada id="spans"
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul>
        <li>Linijka</li>
        <li>Linijka</li>
        <li>Linijka</li>
        <li>Linijka</li>
        <li>Linijka</li>
    </ul>
    <span>RAZ</span>
    <span>DWA</span>
    <div class="list">
        <span>TRZY</span>
    </div>
    <div id="spans">
        <span>CZTERY</span>
        <span>PIEC</span>
    </div>

    <script>
        let f = function (elems) {
            console.log(elems)
        }
        let one = document.getElementsByTagName("li")
        f(one)
        let two = document.getElementsByTagName("ul")
        f(two)
        let three = document.getElementsByTagName("span")
        f(three)
        let four = document.querySelectorAll("div.list span")
        f(four)
        let five = document.querySelectorAll("div#spans span")
        f(five)
    </script>
</body>

</html>
```
