var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var users;
(function (users) {
    var customer = /** @class */ (function () {
        function customer() {
        }
        customer.prototype.setName = function (name) {
            return this.name = name;
        };
        return customer;
    }());
    users.customer = customer;
})(users || (users = {}));
///<reference path="./namespaces2.ts"/>
var users;
(function (users) {
    var person = /** @class */ (function (_super) {
        __extends(person, _super);
        function person() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        person.prototype.getName = function () {
            return this.name;
        };
        return person;
    }(users.customer));
    users.person = person;
})(users || (users = {}));
var u1 = new users.person();
u1.setName("aangishah");
console.log(u1.getName());
