function getName(name) {
    var greet;
    if (name === "Aangi") {
        greet = "hii aangi ";
    }
    else {
        greet = "hi there";
    }
    console.log(greet);
}
getName("Aangi");
for (var i = 0; i < 5; i++) {
    console.log(i);
}
for (var i = 1; i <= 5; i++) // using var key word
 {
    setTimeout(function () { console.log(i); }, 1000);
}
var _loop_1 = function (i_1) {
    setTimeout(function () { console.log(i_1); }, 1000);
};
for (var i_1 = 1; i_1 <= 5; i_1++) //using let keyword
 {
    _loop_1(i_1);
}
