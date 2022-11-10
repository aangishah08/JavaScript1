//number properties:
console.log("number properties:");
console.log("maximum number :" + Number.MAX_VALUE);
console.log("minimum number :" + Number.MIN_VALUE);
console.log("negative Infinity:" + Number.NEGATIVE_INFINITY);
console.log("positive Infinity :" + Number.POSITIVE_INFINITY);
console.log("nan value :" + Number.NaN);
function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(1, "aangi");
employee.prototype.email = "aangi@gmail.com";
console.log("employee id :" + emp.id + "\n" + "employee name :" + emp.name + "\n" + "employee mail id:" + emp.email);
console.log("\n");
//number methods:
console.log("number methods:");
var number = 1234.40;
console.log(number.toExponential());
console.log(number.toFixed(5));
console.log(number.toLocaleString());
var no = new Number(1.12345);
console.log(no.toPrecision(1));
var no1 = new Number(16);
console.log(no1.toString(4));
console.log(no1.valueOf());
