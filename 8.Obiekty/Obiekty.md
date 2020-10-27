#### Zadanie 1

Stwórz obiekt car i dopisz do niego różne właściwości. Wypisz właściwości w konsoli
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

let car = {
    name: 'Tesla',
    age: 2,
    mileage: 20000,
    addMileage: function(age) {
        this.mileage += mileage;
        
    }
    
}
console.log(car); //Tesla
car.model = 'C5';
console.log(car);
    </script>
</head>

<body>

</body>

</html>

```

#### Zadanie 2

Na podstawie obiektu z zadania 1 dopisz do niego metodę zmieniającą jego nazwę na podstawie parametru przekazanego z wywołania metody.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        let car = {
            name: 'Tesla',
            age: 2,
            mileage: 20000,
            addMileage: function (age) {
                this.mileage += mileage;

            }

        }
        car.changeName = function (newName) {
            this.name = newName
        }
        console.log(car)
        car.changeName("Fiat")
        console.log(car)

    </script>
</head>

<body>

</body>

</html>
```

#### Zadanie 3

Stwórz obiekt z metodą sumującą wszystkie liczby z tablicy podanej w parametrze w wywołaniu tej metody. Następnie metoda ta powinna zapisywać wynik we właściwości sum tego obiektu. Na koniec wypisz właściwość sum w konsoli.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        let obj = {
            sumFunction: function (tab) {
                let res = 0
                for (let i = 0; i < tab.length; i++) {
                    res += tab[i]
                }
                this.sum = res
                console.log(this.sum)
            },
            sum: 0
        }
        obj.sumFunction([1, 2, 3])

    </script>
</head>

<body>

</body>

</html>
```

#### Zadanie 4

Stwórz obiekt car. Następnie wypisz w konsoli informacje na jego temat na podany poniżej wzór:

name: BMW
age: 12
...

Czy pary klucz wartość.
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
            name: 'BMW',
            age: 12,
            mileage: 20000,
        }
        let res = ""
        for (prop in obj) {
            res += prop + ": " + obj[prop] + " "
        }
        console.log(res)
    </script>
</body>

</html>
```

#### Zadanie 5

Stwórz dowolny obiek w obiekcie car. Następnie wypisz w konsoli jego właściwości.
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
            name: 'BMW',
            age: 12,
            mileage: 20000,
        }
        obj.obj2 = {
            first: "value1",
            second: "value2"
        }
        console.log(obj.obj2)
    </script>
</body>

</html>
```

#### Zadanie 6

Do obiektu car dodaj dowolną właściwość oraz metodę wypisującą w konsoli napis "Hello". Zrób to poza ciałem obiektu.
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
            name: 'BMW',
            age: 12,
            mileage: 20000,
        }
        obj.obj2 = {
            first: "value1",
            second: "value2"
        }
        obj.third = "value3"
        obj.hello = function () {
            console.log("hello")
        }
        console.log(obj)
        obj.hello()
    </script>
</body>

</html>
```
