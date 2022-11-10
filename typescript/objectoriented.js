//function object oriented
var greeting = /** @class */ (function () {
    function greeting() {
    }
    greeting.prototype.greet = function () {
        console.log('hello aangi shah ,how are you??');
    };
    return greeting;
}());
var obj = new greeting();
obj.greet();
