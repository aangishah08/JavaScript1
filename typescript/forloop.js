for (var x = 0; x < 5; x++) {
    console.log(x);
}
//for in loop
var n = "abc";
for (var x in n) {
    console.log(n[x]);
}
//for of loop
var arr = [1, 2, 3];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var x = arr_1[_i];
    console.log(arr[x]);
}
