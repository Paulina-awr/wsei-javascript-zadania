#### Zadanie 1

Wypisz w konsoli:

1. Rodzica elementu id="buz"
2. Brata elementu id="baz"
3. Dzieci elementu id="foo"
4. rodzica elementu id"foo"
5. pierwsze dziecko elementu id="foo"
6. środkowe dziecko elementu id="foo"
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="main">
        <div id="baz">
            <div id="buz"></div>
        </div>
        <div id="foo">
            <div id="one">

            </div>
            <div id="two">

            </div>
            <div id="three">

            </div>
        </div>
    </div>
    <script>
        console.log(document.getElementById("buz").parentElement)
        console.log(document.getElementById("baz").nextElementSibling)
        console.log(document.getElementById("foo").children)
        console.log(document.getElementById("foo").parentElement)
        console.log(document.getElementById("foo").firstElementChild)
        let children = document.getElementById("foo").children
        let middle = parseInt(children.length / 2)
        console.log(children[middle])
    </script>
</body>

</html>
```

#### Zadanie 2

Napisz funkcję która przyjmie jako parametr element id="ex2". Następnie doda nasłuchiwanie eventu click na tym elemencie. Jeśli czerwony kwadrat zostanie kliknięty pobierz tekst z wewnętrzego diva tego elementu i wyświetl go w konsoli.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #ex-2 {
            background-color: red;
            width: 200px;
            height: 200px;
        }
    </style>
</head>

<body>
    <div id="ex-2">
        <div>
            tekst wewnetrzny
        </div>
    </div>
    <script>
        let f = function (elem) {
            elem.addEventListener("click", function (event) {
                let inside = elem.querySelectorAll("div")[0].innerText
                console.log(inside)
            })
        }
        let el = document.getElementById("ex-2")
        f(el)
    </script>
</body>

</html>
```

#### Zadanie 3

Napisz funkcję która doda na każdym buttonie w div id="ex3" ten sam event kliknięcia. Zadaniem eventu będzie odsłanianie lub ukrywanie elementu span obok buttona.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="ex3">
        <div>
            <button>
                KLIKNIJ
            </button>
            <span hidden=true>Tekst</span>
        </div>
        <div>
            <button>
                KLIKNIJ
            </button>
            <span hidden=true>Tekst</span>
        </div>
        <div>
            <button>
                KLIKNIJ
            </button>
            <span hidden=true>Tekst</span>
        </div>
        <div>
            <button>
                KLIKNIJ
            </button>
            <span hidden=true>Tekst</span>
        </div>
    </div>
    <script>
        let f = function () {
            let bts = document.getElementById("ex3").querySelectorAll("button")
            for (let i = 0; i < bts.length; i++) {
                bts[i].addEventListener("click", function () {
                    let hid = bts[i].nextElementSibling.getAttribute("hidden")
                    console.log(hid)
                    if (hid) {
                        bts[i].nextElementSibling.removeAttribute("hidden")
                    }
                    else {
                        bts[i].nextElementSibling.setAttribute("hidden", true)
                    }
                })
            }
        }
        f()
    </script>
</body>

</html>
```


#### Zadanie 4

Dodaj event na buttony z zadania 3 tak aby po kliknięciu na dowolny z nich ich rodzic zmieniał kolor na dowolny. Całość zapisz w funkcji.
Losowy kolor:
var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="ex3">
        <div>
            <button>
                KLIKNIJ
            </button>
            <span hidden=true>Tekst</span>
        </div>
        <div>
            <button>
                KLIKNIJ
            </button>
            <span hidden=true>Tekst</span>
        </div>
        <div>
            <button>
                KLIKNIJ
            </button>
            <span hidden=true>Tekst</span>
        </div>
        <div>
            <button>
                KLIKNIJ
            </button>
            <span hidden=true>Tekst</span>
        </div>
    </div>
    <script>
        let f = function () {
            let bts = document.getElementById("ex3").querySelectorAll("button")
            for (let i = 0; i < bts.length; i++) {
                bts[i].addEventListener("click", function () {
                    let hid = bts[i].nextElementSibling.getAttribute("hidden")
                    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
                    bts[i].parentElement.style.backgroundColor = randomColor
                    console.log(hid)
                    if (hid) {
                        bts[i].nextElementSibling.removeAttribute("hidden")
                    }
                    else {
                        bts[i].nextElementSibling.setAttribute("hidden", true)
                    }
                })
            }
        }
        f()

    </script>
</body>

</html>
```

#### Zadanie 5

W div id="ex5" znajdują się trzy prostokąty. Po najechaniu na dowolny z nich elementy na liście powinny zmienić swój background-color na taki jak prostokąt ale według poniższych punktów:

1. Tylko pierwszy element listy
2. tylko ostatni element listy
3. Parzyste elementy listy
4. Wszystkie elementy listy
5. Żaden z elementów - tylko cała lista
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #ex5 {
            width: 600px;
            height: 300px;
        }

        #ex5 div {
            width: 200px;
            height: 300px;
            float: left;
        }

        #one {
            background-color: red;
        }

        #two {
            background-color: green;
        }

        #three {
            background-color: blue;
        }

        #lists ul {
            float: left
        }
    </style>
</head>

<body>
    <div id="ex5">
        <div id="one"></div>
        <div id="two"></div>
        <div id="three"></div>
    </div>
    <div id="lists">
        <ul id="first">
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
        <ul id="second">
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
        <ul id="third">
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
        <ul id="fourth">
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
        <ul id="fifth">
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
    </div>
    <script>
        let mainDiv = document.getElementById("ex5")
        let divs = mainDiv.querySelectorAll("div")
        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener("mouseover", function () {
                let color = getComputedStyle(divs[i]).backgroundColor
                let l1 = document.getElementById("first")
                l1.firstElementChild.style.color = color
                let l2 = document.getElementById("second")
                l2.lastElementChild.style.color = color
                let l3 = document.getElementById("third")
                let li3 = l3.querySelectorAll("li")
                for (let j = 0; j < li3.length; j++) {
                    if (j % 2 == 1) {
                        li3[j].style.color = color
                    }
                }
                l4 = document.getElementById("fourth")
                li4 = l4.querySelectorAll("li")
                for (let j = 0; j < li4.length; j++) {
                    li4[j].style.color = color
                }
                l5 = document.getElementById("fifth")
                l5.style.backgroundColor = color
            })
        }
    </script>
</body>

</html>
```

#### Zadanie 6

W div id="ex6" zaczynając od tego diva znajdź i zapisz do zmiennych następujące kombinacje:

1. pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko
2. pierwsze dziecko -> rodzic -> pierwsze dziecko -> pierwsze dziecko -> brat -> rodzic
3. rodzic -> pierwsze dziecko -> rodzic -> drugie dziecko -> pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>
        <div id="ex6">
            <div id="result2">
                <div>
                    <div id="result1"></div>
                </div>
                <div>

                </div>
            </div>
        </div>
        <div>
            <div>
                <div>
                    <div id="result3">

                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        let first = document.getElementById("ex6").firstElementChild.firstElementChild.firstElementChild

        let second = document.getElementById("ex6").firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement
        let thirdPart = document.getElementById("ex6").parentElement.firstElementChild.parentElement.children
        let thirdAll = thirdPart[1].firstElementChild.firstElementChild.firstElementChild
        console.log(first)
        console.log(second)
        console.log(thirdAll)
    </script>
</body>

</html>
```
