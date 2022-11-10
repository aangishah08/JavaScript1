function sum(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    var result = a;
    for (var i = 0; i < b.length; i++) {
        result += b[i];
    }
    return result;
}
var result1 = sum(10, 20);
var result2 = sum(10, 10, 20, 5, 10);
console.log(result1 + "\n" + result2);
