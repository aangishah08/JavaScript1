//Arithmetic operators:
var x = 10;
var y = 20;
console.log("addition :" + x + y);
console.log(x - y);
console.log("multi :" + x * y);
console.log("division :" + x / y);
console.log("modulo" + x % y);
var a = 10;
a++;
console.log("increment :" + a);
a--;
console.log("decriment :" + a);
//Relational Operators
var num1 = 10;
var num2 = 10;
var num3 = 20;
console.log(num1 == num2);
console.log(num1 > num3);
console.log(num1 < num3);
console.log(num1 >= num3);
console.log(num1 <= num3);
console.log(num1 != num2);
//Logical Operators 
var no1 = 10;
var no2 = 20;
console.log(no1 < 20 && no2 < 25);
console.log(no1 > 10 || no2 < 25);
console.log(!(no1 > no2));
//Assignment operators
var p = 3;
var q = 2;
console.log(p += q);
console.log(p -= q);
console.log(p *= q);
console.log(p /= q);
//negation operator (-)
console.log(-p);
//Concatenation operator (+)
var n = "Aangi", s = "Shah";
console.log(n + s);
//Conditional Operator (?) & Ternary operator
var v = 10;
var result = (v > 0) ? "true" : "false";
console.log(result);
//typeof operator & instanceof
var mess = "aangi";
console.log(typeof (mess));
console.log(typeof (v));
var arr = [1, 2, 3];
console.log(arr instanceof Array);
