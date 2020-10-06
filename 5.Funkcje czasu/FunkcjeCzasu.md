#### Zadanie 1

Wypisuj w konsoli co 3 sekundy napis "Cześć po raz " oraz liczbę powtóżeń. Jeśli Licznik dojdzie do 15 zatrzymaj go. 

```
var i = 0;

var myfunc = setInterval(function () {
    i = i + 1;
    console.log(i, "Czesc na raz");

    if (i == 15) {
        clearInterval(myfunc);
    }
}, 3000);
```

### Zadanie 2

Po 2 sekundach od uruchomienia programu wyświetl w konsoli wszystkie elementy dowolnej tablicy. Następnie wyświetl w konsoli co 3 sekundy kolejny element tej tablicy.
