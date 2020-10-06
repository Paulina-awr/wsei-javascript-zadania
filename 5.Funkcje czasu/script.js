// zadanie 1

var i = 0;

var myfunc = setInterval(function () {
    i = i + 1;
    console.log(i, "Czesc na raz");

    if (i == 15) {
        clearInterval(myfunc);
    }
}, 3000);


// zadanie 2
var myArr = [2, 4, 6, 8, 10];

setTimeout(function () {
    console.log(myArr);
}, 2000);

setTimeout(function () {
    for (var i = 0; i < myArr.length; ++i) {
        console.log("value at index " + i + " is: " + myArr[i]);
    }
}, 3000);
