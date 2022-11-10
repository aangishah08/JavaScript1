var testing;
(function (testing) {
    var testing1;
    (function (testing1) {
        var cal = /** @class */ (function () {
            function cal() {
            }
            cal.prototype.calculate = function (price) {
                return price * 10;
            };
            return cal;
        }());
        testing1.cal = cal;
    })(testing1 = testing.testing1 || (testing.testing1 = {}));
})(testing || (testing = {}));
///<reference path="./nestednamespace.ts"/>
var c1 = new testing.testing1.cal();
console.log(c1.calculate(200));
