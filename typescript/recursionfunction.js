function factorial(no) {
    if (no <= 0) {
        return 1;
    }
    else {
        return (no * factorial(no - 1));
    }
}
;
console.log(factorial(6));
//Anonymous Recursive Function
(function () {
    var x = "Hello!!";
    console.log(x);
})();
