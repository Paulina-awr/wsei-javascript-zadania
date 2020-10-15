#### Zadanie 1

Stwórz następujące eventy i sprawdź co udostępnia ich obiekt event:

1. Kliknięcie w przycisk o id="test-event"
2. Ruch myszką na ekranie
3. Najechanie myszką na przycisk o id="test-event"
4. naciśnięcie klawisza na klawiaturze
5. scrollowanie strony w dół i w górę
6. zmianę tekstu w input id="input-test"
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="test-event">Przycisk</button>
    <input type="text" id="input-test" />
    <script>
        document.getElementById("test-event").addEventListener("click", function (event) {
            console.log(event)
        })
        window.addEventListener("mousemove", function (event) {
            console.log(event)
        })
        document.getElementById("test-event").addEventListener("mouseover", function (event) {
            console.log(event)
        })
        window.addEventListener("keydown", function (event) {
            console.log(event)
        })
        window.addEventListener("scroll", function (event) {
            console.log(event)
        })
        document.getElementById("input-test").addEventListener("change", function (event) {
            console.log(event)
        })
    </script>
</body>

</html>
```

#### Zadanie 2

Napisz funkcję która po kliknięciu na button id="ex2" pobierze tekst z jego data atrybutu a następnie wpisze ten tekst do spanu który jest poniżej.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="ex2" data="informacje">EX2</button>
    <br />
    <span></span>
    <script>
        document.getElementById("ex2").addEventListener("click", function (event) {
            let text = event.target.getAttribute("data")
            document.getElementsByTagName("span")[0].innerText = text
        })
    </script>
</body>

</html>
```

#### Zadanie 3

Napisz funkcję która po najechaniu na czerwony kwadrat zmieniu jego kolor na niebieski. Następnie po zjechaniu myszki z obszaru kwadratu zmieni się z powrotem na czerwony.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #kwadrat {
            width: 200px;
            height: 200px;
            background-color: red;
        }
    </style>
</head>

<body>
    <div id="kwadrat"></div>
    <script>
        document.getElementById("kwadrat").addEventListener("mouseover", function (event) {
            event.target.style.backgroundColor = "blue"
        })
        document.getElementById("kwadrat").addEventListener("mouseout", function (event) {
            event.target.style.backgroundColor = "red"
        })
    </script>
</body>

</html>
```
#### Zadanie 4

Napisz funkcję walidacyjną dla input id="input-test". Funkcja ma za zadanie sprawdzać co jest wpisane w inputa. Jeśli user wpisze jakąś cyfrę pokaż mu komunikat błędu pod inputem informujący że nie może wpisywać cyfr.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <input id="input-test" />
    <p id="error"></p>
    <script>
        document.getElementById("input-test").addEventListener("change", function (event) {
            let is = /\d/.test(event.target.value)
            if (is == true) {
                document.getElementById("error").innerText = "Nie można wpisywać cyfr"
            }
            else {
                document.getElementById("error").innerText = ""
            }
        })
    </script>
</body>

</html>
```

#### Zadanie 5

Napisz funkcję countera. Funkcja ma za zadanie wpisywać do spanu w divie id="ex5" numerka odpowiadającego ilości kliknięć w button id="ex5-button". Jeśli licznik dojdzie do 10 event powinien być usunięty.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #ex5 {
            width: 100px;
            height: 100px;
            background-color: aquamarine;
        }
    </style>
</head>

<body>
    <div id="ex5">
        0
    </div>
    <button id="ex5-button">KLIKNIJ</button>
    <script>
        let f = function () {
            let prev = parseInt(document.getElementById("ex5").innerText)
            prev += 1
            document.getElementById("ex5").innerHTML = prev
            if (prev == 10) {
                document.getElementById("ex5-button").removeEventListener("click", f)
            }
        }
        document.getElementById("ex5-button").addEventListener("click", f)
    </script>
</body>

</html>
```

#### Zadanie 6

Napisz funkcję która będzie obserwowac scroll strony. Jeśli scroll zjedzie poniżej 200px zmień kolor strony na czerwony. Jeśli będzie powyżej 200px niech zmieni kolor na biały.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 100%;
            height: 3000px;
        }
    </style>
</head>

<body>
    <div>

    </div>
    <script>
        window.addEventListener("scroll", function () {
            if (window.scrollY > 200) {
                document.getElementsByTagName("div")[0].style.backgroundColor = "red"
            }
            else {
                document.getElementsByTagName("div")[0].style.backgroundColor = "white"
            }
        })
    </script>
</body>

</html>
```

#### Zadanie 7

Napisz obsługę kalkulatora. Dodaj odpowiednie eventy do przycisków. Wynik wyświetlaj w inpucie. Staraj się aby funkcje były reużywalne.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <input id="numbers" />
    <br />
    <br />
    <button id="plus" class="op">+</button>
    <button id="minus" class="op">-</button>
    <button id="multiply" class="op">*</button>
    <button id="divide" class="op">/</button>
    <button id="equal">=</button>
    <button id="c">C</button>
    <script>
        let str = ""
        let elems = document.getElementsByClassName("op")
        for (let i = 0; i < elems.length; i++) {
            elems[i].addEventListener("click", function () {
                if (document.getElementById("numbers").value != "") {
                    str += document.getElementById("numbers").value + elems[i].innerText
                    document.getElementById("numbers").value = ""
                }
            })
        }
        document.getElementById("equal").addEventListener("click", function () {
            str += document.getElementById("numbers").value
            console.log(str)
            console.log(str[str.length - 1])
            if (str[str.length - 1] == "+" || str[str.length - 1] == "-" || str[str.length - 1] == "*" || str[str.length - 1] == "/") {
                str = str.slice(0, str.length - 1)
                document.getElementById("numbers").value = eval(str)
            }
            else {
                document.getElementById("numbers").value = eval(str)
            }
            str = ""
        })
        document.getElementById("c").addEventListener("click", function () {
            str = ""
            document.getElementById("numbers").value = ""
        })
    </script>
</body>

</html>
```
