var x = 5; // global scope
var numbers = /** @class */ (function () {
    function numbers() {
        this.num_val = 3; //class variable
    }
    numbers.prototype.storeNum = function () {
        var z = 10; //local scope
    };
    numbers.b = 5; //static 
    return numbers;
}());
console.log("global scope" + x);
console.log("static variable" + numbers.b);
var num = new numbers();
console.log("class variable:" + num.num_val);
