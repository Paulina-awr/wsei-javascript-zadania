// zadanie 1

var i = 0;

var myfunc = setInterval(function () {
    i = i + 1;
    console.log(i, "Czesc na raz");

    if (i == 15) {
        clearInterval(myfunc);
    }
}, 3000);
