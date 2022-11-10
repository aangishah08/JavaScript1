//single inheritance
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
var customer = /** @class */ (function () {
    function customer(cname) {
        this.cname = cname;
    }
    return customer;
}());
var view = /** @class */ (function (_super) {
    __extends(view, _super);
    function view() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    view.prototype.disp = function () {
        console.log("display the customer name:" + this.cname);
    };
    return view;
}(customer));
var c = new view("aangishah");
c.disp();
//multilevel inheritance
var root = /** @class */ (function () {
    function root() {
    }
    return root;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return child;
}(root));
var leaf = /** @class */ (function (_super) {
    __extends(leaf, _super);
    function leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return leaf;
}(child));
var l = new leaf();
console.log(l.str = "hello");
//methods Overriding in class inheritance
var person1 = /** @class */ (function () {
    function person1() {
    }
    person1.prototype.disp = function () {
        console.log("this is parent class");
    };
    return person1;
}());
var person2 = /** @class */ (function (_super) {
    __extends(person2, _super);
    function person2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    person2.prototype.disp = function () {
        _super.prototype.disp.call(this);
        console.log("this is child class");
    };
    return person2;
}(person1));
var p2 = new person2();
p2.disp();
