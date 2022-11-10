"use strict";
exports.__esModule = true;
exports.person = exports.sum = void 0;
var sum = /** @class */ (function () {
    function sum() {
    }
    sum.prototype.add = function (a, b) {
        return a + b;
    };
    sum.prototype.sub = function (a, b) {
        return a - b;
    };
    return sum;
}());
exports.sum = sum;
var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.getName = function (name) {
        return name;
    };
    return person;
}());
exports.person = person;
