// var employee=['aangi','shah','female'];
// let[firstname,lastname,gender]=employee;
// console.log(firstname);
// console.log(lastname);
// console.log(gender);
//rest operater
var employee = ['aangi', 'shah', 'female'];
var fname = employee[0], element = employee.slice(1);
console.log(fname);
console.log(element);
//defulat parameters
var employee = ['aangi', 'shah'];
var firstname = employee[0], lastname = employee[1], _a = employee[2], gender = _a === void 0 ? 'female' : _a;
console.log(firstname);
console.log(lastname);
console.log(gender);
