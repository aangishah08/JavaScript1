var person = {
    firstName: "aangi",
    lastName: "shah",
    sayHello: function () { } //Type template 
};
person.sayHello = function () {
    console.log("hello " + person.firstName);
};
person.sayHello();
