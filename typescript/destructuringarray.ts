// var employee=['aangi','shah','female'];
// let[firstname,lastname,gender]=employee;
// console.log(firstname);
// console.log(lastname);
// console.log(gender);

//rest operater
var employee=['aangi','shah','female'];
let[fname,...element]=employee;
console.log(fname);
console.log(element);

//defulat parameters
var employee=['aangi','shah'];
let[firstname,lastname,gender='female']=employee;
console.log(firstname);
console.log(lastname);
console.log(gender);

