#### Zadanie 1

Stwórz i dodaj do strony element div wraz z tekstem: "To jest nowy element";

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
        let div = document.createElement("div")
        div.innerText = "To jest nowy element"
        document.getElementsByTagName("body")[0].appendChild(div)
    </script>
</body>

</html>
```

#### Zadanie 2

Stwórz odpowiednie elementy i dodaj do strony listę ulubionych owoców (minimum 6)
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
        let list = document.createElement("ul")
        let tab = ["jablko", "banan", "cytryna", "gruszka", "truskawka", "kiwi"]
        for (let i = 0; i < tab.length; i++) {
            let now = document.createElement("li")
            now.innerText = tab[i]
            list.appendChild(now)
        }
        document.getElementsByTagName("body")[0].appendChild(list)
    </script>
</body>

</html>
```

#### Zadanie 3

Na podstawie listy z zadanie 2 stwórz event który usunie z tej listy co drugi element.
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
        let list = document.createElement("ul")
        let tab = ["jablko", "banan", "cytryna", "gruszka", "truskawka", "kiwi"]
        for (let i = 0; i < tab.length; i++) {
            let now = document.createElement("li")
            now.innerText = tab[i]
            list.appendChild(now)
        }
        document.getElementsByTagName("body")[0].appendChild(list)
        document.addEventListener("keydown", function () {
            let li = document.querySelectorAll("li")
            for (let i = 0; i < li.length; i++) {
                console.log(i)
                if (i % 2 == 0) {
                    li[i].parentNode.removeChild(li[i])
                }
            }
        })
    </script>
</body>

</html>
```

#### Zadanie 4

Dodaj do strony button po kliknięciu na button ma on się usuwać ze strony.
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
        let bt = document.createElement("button")
        bt.innerText = "KLIKNIJ"
        bt.addEventListener("click", function () {
            document.getElementsByTagName("button")[0].parentNode.removeChild(document.getElementsByTagName("button")[0])
        })
        document.getElementsByTagName("body")[0].appendChild(bt)
    </script>
</body>

</html>
```

#### Zadanie 5

Na podstawie losowej liczby utwórz odpowiednią ilość divów z tekstem: "to jest div numer ${numer}"
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
        let randomNumber = Math.floor(Math.random() * 25) + 5
        for (let i = 0; i < randomNumber; i++) {
            let now = document.createElement("div")
            now.innerText = "To jest div numer " + (i + 1)
            document.getElementsByTagName("body")[0].appendChild(now)
        }
    </script>
</body>

</html>
```

#### Zadanie 6

Na podstawie obiektu stwórz struktórę w html
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
        let obj = { div1: 'to jest div', span1: 'to jest span', div2: { div3: 'to jest div', }, span2: 'to jest span', }
        console.log(obj)
        for (let prop in obj) {
            let elemName = prop.slice(0, -1)
            let elem = document.createElement(elemName)
            if (typeof (obj[prop]) == "string") {
                elem.innerText = obj[prop]
            }
            else if (typeof (obj[prop]) == "object") {
                let objNext = obj[prop]
                for (propNext in objNext) {
                    let elemNameNext = propNext.slice(0, -1)
                    let elemNext = document.createElement(elemNameNext)
                    elemNext.innerText = objNext[propNext]
                    elem.appendChild(elemNext)
                }
            }
            document.getElementsByTagName("body")[0].appendChild(elem)
        }
    </script>
</body>

</html>
```

#### Zadanie 7

Stwórz dwie listy. W jednej umieść minim 6 elementów. Druga niech będzie pusta. Pod każdą z list dodaj button. Po kliknięciu na button pod listą ostatni element listy ma być przeniesiony do drugiej listy. Jeśli w danej liście nie ma żadnych elementów to button ma być zablokowany przy pomocy atrybutu disabled;
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 50%;
            float: left
        }
    </style>
</head>

<body>
    <div id="first"></div>
    <div id="second"></div>
    <script>
        let firstList = document.createElement("ul")
        for (let i = 0; i < 6; i++) {
            let now = document.createElement("li")
            now.innerText = i
            firstList.appendChild(now)
        }
        let firstButton = document.createElement("button")
        firstButton.setAttribute("id", "firstButton")
        firstButton.innerText = "KLIKNIJ"
        firstButton.addEventListener("click", function () {
            let first = document.getElementById("first")
            let li = first.querySelectorAll("li")
            if (li.length == 1) {
                this.setAttribute("disabled", true)
            }
            document.getElementById("secondButton").removeAttribute("disabled")
            let last = li[li.length - 1]
            let second = document.getElementById("second")
            let ul = second.querySelector("ul")
            ul.appendChild(last)
        })
        document.getElementById("first").appendChild(firstList)
        document.getElementById("first").appendChild(firstButton)

        let secondList = document.createElement("ul")
        let secondButton = document.createElement("button")
        secondButton.setAttribute("disabled", true)
        secondButton.setAttribute("id", "secondButton")
        secondButton.innerText = "KLIKNIJ"
        secondButton.addEventListener("click", function () {
            let first = document.getElementById("second")
            let li = first.querySelectorAll("li")
            if (li.length == 1) {
                this.setAttribute("disabled", true)
            }
            document.getElementById("firstButton").removeAttribute("disabled")
            let last = li[li.length - 1]
            let second = document.getElementById("first")
            let ul = second.querySelector("ul")
            ul.appendChild(last)
        })
        document.getElementById("second").appendChild(secondList)
        document.getElementById("second").appendChild(secondButton)
    </script>
</body>

</html>
```

#### Zadanie 8

Stwórz formularz do którego będzie można wpisać jaki element user chce utworzyć, z jakim tekstem, z kolorem tekstu i ile razy ma być ten element powtórzony na stronie. Po kliknięciu na button "Utwórz" formularz powinien tworzyć taką strukturę.
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
        document.write('<form> <label> Element: </label ><input type="text" name="elem" /><label>Tekst: </label><input type="text" name="text" /><label>Kolor: </label><input type="text" name="color" /><label>Ilosc: </label><input type="number" name="amount" /><button>Utworz</button>    </form > ')
        document.getElementsByTagName("button")[0].addEventListener("click", function (event) {
            event.preventDefault()
            let allElems = document.getElementsByTagName("form")[0].elements
            let res = []
            for (let i = 0; i < allElems.length; i++) {
                if (allElems[i].localName == "input") {
                    res.push(allElems[i].value)
                }
            }
            let howMany = parseInt(res[3])
            for (let i = 0; i < howMany; i++) {
                let now = document.createElement(res[0])
                now.innerText = res[1]
                now.style.color = res[2]
                document.body.appendChild(now)
            }
        })
    </script>
</body>

</html>
```
#### Zadanie 9

Stwórz formularz do którego będzie można wpisać dane tabelarczne takie jak:

1. Imię
2. Nazwisko
3. Wiek
4. Ilość dzieci
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table {
            border-collapse: collapse;
        }

        td {
            text-align: center;
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <script>
        document.write('<form><div class="one"><label>Imie: </label><input type="text" name="name" /><label>Nazwisko: </label><input type="text" name="surname" /><label>Wiek: </label><input type="number" name="age" /><label>Ilosc dzieci: </label><input type="number" name="numberOfChildren" /></div></form>')
        document.write('<div><button id="wiecej">WIĘCEJ</button><button id="utworz">UTWORZ</button></div>')
        document.getElementById("wiecej").addEventListener("click", function (event) {
            event.preventDefault()
            let one = document.createElement("div")
            one.setAttribute("class", "one")
            one.innerHTML = '<label>Imie: </label><input type="text" name="name" /><label>Nazwisko: </label><input type="text" name="surname" /><label>Wiek: </label><input type="number" name="age" /><label>Ilosc dzieci: </label><input type="number" name="numberOfChildren" />'
            document.getElementsByTagName("form")[0].appendChild(one)
        })
        document.getElementById("utworz").addEventListener("click", function (event) {
            console.log("XD")
            event.preventDefault()
            let all = document.querySelectorAll(".one")
            let table = document.createElement("table")
            let ftr = document.createElement("tr")
            let td1 = document.createElement("td")
            td1.innerText = "Imię"
            let td2 = document.createElement("td")
            td2.innerText = "Nazwisko"
            let td3 = document.createElement("td")
            td3.innerText = "Wiek"
            let td4 = document.createElement("td")
            td4.innerText = "Ilość dzieci"
            let td5 = document.createElement("td")
            td5.innerText = "Usun"
            ftr.appendChild(td1)
            ftr.appendChild(td2)
            ftr.appendChild(td3)
            ftr.appendChild(td4)
            ftr.appendChild(td5)
            table.appendChild(ftr)
            for (let i = 0; i < all.length; i++) {
                let inputs = all[i].querySelectorAll("input")
                let tr = document.createElement("tr")
                for (let j = 0; j < inputs.length; j++) {
                    let td = document.createElement("td")
                    td.innerText = inputs[j].value
                    tr.appendChild(td)
                }
                let del = document.createElement("button")
                del.innerText = "USUN"
                del.setAttribute("class", "del")
                let delTd = document.createElement("td")
                delTd.appendChild(del)
                tr.appendChild(delTd)
                table.appendChild(tr)
            }
            document.body.appendChild(table)
            let dels = document.getElementsByClassName("del")
            for (let i = 0; i < dels.length; i++) {
                dels[i].addEventListener("click", function (event) {
                    event.preventDefault()
                    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
                })
            }
        })
    </script>
</body>

</html>
```

Formularz powinien mieć możliwość dodawania kilku takich pozycji po kliknięciu na button "Więcej". Po kliknieciu na "Utwórz" powinna utworzyć się tabela z odpowiednimi headerami oraz wypełnionymi danymi z formularza. Na końcu każdej lini powinien być button "Usuń" który usuwa daną linijkę.


#### Zadanie 10

Na podstawie powyższego zadania stwórz funkcję która sprawdzi wszystkie stringi wpisane i zamieni pierwsze ich litery na duże. 
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table {
            border-collapse: collapse;
        }

        td {
            text-align: center;
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <script>
        function changeLetters() {
            console.log("spoko")
            let allTd = document.getElementsByTagName("td")
            for (let i = 0; i < allTd.length; i++) {
                let previous = allTd[i].innerText
                let other = previous.split("")
                other.shift()
                other = other.join("")
                previous = previous.slice(0, 1).toUpperCase() + other
                allTd[i].innerText = previous
            }
        }
        document.write('<form><div class="one"><label>Imie: </label><input type="text" name="name" /><label>Nazwisko: </label><input type="text" name="surname" /><label>Wiek: </label><input type="number" name="age" /><label>Ilosc dzieci: </label><input type="number" name="numberOfChildren" /></div></form>')
        document.write('<div><button id="wiecej">WIĘCEJ</button><button id="utworz">UTWORZ</button></div>')
        document.getElementById("wiecej").addEventListener("click", function (event) {
            event.preventDefault()
            let one = document.createElement("div")
            one.setAttribute("class", "one")
            one.innerHTML = '<label>Imie: </label><input type="text" name="name" /><label>Nazwisko: </label><input type="text" name="surname" /><label>Wiek: </label><input type="number" name="age" /><label>Ilosc dzieci: </label><input type="number" name="numberOfChildren" />'
            document.getElementsByTagName("form")[0].appendChild(one)
        })
        document.getElementById("utworz").addEventListener("click", function (event) {
            event.preventDefault()
            let all = document.querySelectorAll(".one")
            let table = document.createElement("table")
            let ftr = document.createElement("tr")
            let td1 = document.createElement("td")
            td1.innerText = "Imię"
            let td2 = document.createElement("td")
            td2.innerText = "Nazwisko"
            let td3 = document.createElement("td")
            td3.innerText = "Wiek"
            let td4 = document.createElement("td")
            td4.innerText = "Ilość dzieci"
            let td5 = document.createElement("td")
            td5.innerText = "Usun"
            ftr.appendChild(td1)
            ftr.appendChild(td2)
            ftr.appendChild(td3)
            ftr.appendChild(td4)
            ftr.appendChild(td5)
            table.appendChild(ftr)
            for (let i = 0; i < all.length; i++) {
                let inputs = all[i].querySelectorAll("input")
                let tr = document.createElement("tr")
                for (let j = 0; j < inputs.length; j++) {
                    let td = document.createElement("td")
                    td.innerText = inputs[j].value
                    tr.appendChild(td)
                }
                let del = document.createElement("button")
                del.innerText = "USUN"
                del.setAttribute("class", "del")
                let delTd = document.createElement("td")
                delTd.appendChild(del)
                tr.appendChild(delTd)
                table.appendChild(tr)
            }
            document.body.appendChild(table)
            let dels = document.getElementsByClassName("del")
            for (let i = 0; i < dels.length; i++) {
                dels[i].addEventListener("click", function (event) {
                    event.preventDefault()
                    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
                })
            }
            changeLetters()
        })
    </script>
</body>

</html>
```

#### Zadanie 11

Stwóz funkcję która będzie przyjmować dowolny string. Sprawdź czy występują w nim liczby. Jeśli tak to podaj w konsoli ich sumę. Dodatkowo stwórz tyle divów z tym tekstem ile wynosi iloczyn tych liczb.
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
        let f = function (str) {
            let res = str.match(/\d+/g);
            console.log(res)
            let resNum = 1
            for (let i = 0; i < res.length; i++) {
                let now = parseInt(res[i])
                resNum = resNum * now
            }
            console.log(resNum)
            for (let i = 0; i < resNum; i++) {
                let div = document.createElement("div")
                div.innerText = resNum
                document.getElementsByTagName("body")[0].appendChild(div)
            }
        }
        f("Lorem ipsum dolor sit amet 4, consectetur adipiscing elit 2 10. Sed tempor quis magna quis placerat. Donec mi dui, semper non lectus vel, venenatis posuere neque. Vestibulum egestas pellentesque mattis. Nam elit leo, gravida at erat in, pretium bibendum ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique sollicitudin lectus quis tempus. Pellentesque magna ex, auctor nec vehicula at, sagittis eget leo.")
    </script>
</body>

</html>
```

#### Zadanie 12

Stwórz funkcję która przyjmuje dowolnego stringa. Następnie Wrzuć tego strina do obiektu pod dowolnym polem. Dopisz metodę do obiektu która będzie sprawdzać czy w tekście występuje string 'Ala' i jeśli tak to zamieni go na 'Ola'. Jeśli tekst nie występuje to niech utworzy odpowiedniego diva i doda do niego tekst "Słowo Ala nie występuje w tekście."
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
        let obj = {}
        function check(str) {
            obj.str = str
            let includes = str.includes("Ala")
            if (includes) {
                obj.str = obj.str.replace("Ala", "Ola")
                console.log(obj)
            }
            else {
                let div = document.createElement("div")
                div.innerText = "Słowo Ala nie wystepuje w tekscie"
                document.body.appendChild(div)
            }
        }
        check("Lorem ipsum dolor sit amet Ala, consectetur adipiscing elit. Ut condimentum consequat arcu non bibendum. Ut in nulla pharetra, scelerisque urna eu, pharetra ligula. Nunc pulvinar, magna sed interdum luctus, velit urna hendrerit eros, vel scelerisque neque magna id metus. Duis interdum posuere pulvinar. Integer accumsan orci ac lectus blandit, quis venenatis nisi auctor. Proin non neque et nunc porttitor ornare ut egestas urna. Maecenas rutrum, turpis accumsan aliquet dignissim, nunc mauris lobortis nulla, a ullamcorper odio ante a nisi. Curabitur non odio id ex sodales maximus ut ut orci. Suspendisse sollicitudin, eros sed dapibus porttitor, justo est tempus sem, sit amet vehicula nibh turpis et lacus. Proin interdum nunc non gravida placerat. Nam iaculis aliquam libero ac iaculis. Integer eleifend lacinia ex ut malesuada. Vivamus tincidunt vitae velit sed vestibulum. Praesent feugiat gravida urna ut aliquet. Aliquam fermentum mauris non dui ultrices, sed interdum odio varius.")
    </script>
</body>

</html>
```

#### Zadanie 13

Stwórz funkcję która przyjmie tablicę stringów. Funkcja ma zwrócić nową tablicę z ilością liter w strinach. Druga funkcja ma zsumować wszystkie liczby z tablicy i zwrócić wynik. Trzecia funkcja ma wyciągnąć średnią z liczb i zwrócić wynik.
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
        function f(strings) {
            let res = []
            for (let i = 0; i < strings.length; i++) {
                res.push(strings[i].length)
            }
            return (res)
        }
        console.log(f(["E", "ndex", "html"]))
        function f2(strings) {
            let res = 0
            for (let i = 0; i < strings.length; i++) {
                res += strings[i].length
            }
            return (res)
        }
        console.log(f2(["E", "ndex", "html"]))
        function f3(strings) {
            let res = 0
            for (let i = 0; i < strings.length; i++) {
                res += strings[i].length
            }
            res = res / strings.length
            return (res)
        }
        console.log(f3(["E", "ndex", "html"]))
    </script>
</body>

</html>
```

#### Zadanie 14 

Stwórz obiekt z 3 polami:
{
    name: '',
    surname: '',
    age: ''
}

Następnie stwóz funkcję (nie metodę) która przypisuje nowe wartości do tych pól oraz tworzy nowe pola z długością stringów. Jeśli któyś ze stringów będzie dłuższy niż 5 to stwórz w html button po kliknięciu którego cały obiekt wróci do stanu początkowego.
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
        let obj = {
            name: "",
            surname: "",
            age: ""
        }

        function f(name, surname, age) {
            let nameLength = name.length
            let surnameLength = surname.length
            let ageLength = age.length
            obj.name = name
            obj.surname = surname
            obj.age = age
            obj.nameLength = nameLength
            obj.surnameLength = surnameLength
            obj.ageLength = ageLength
            if (nameLength > 5 || surnameLength > 5 || ageLength > 5) {
                let bt = document.createElement("button")
                bt.innerText = "STAN POCZATKOWY"
                bt.addEventListener("click", function () {
                    obj = {
                        name: "",
                        surname: "",
                        age: ""
                    }
                })
                document.body.appendChild(bt)
            }
        }
        f("spoko", "loko", "moko")
    </script>
</body>

</html>
```
