var person = /** @class */ (function () {
    function person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    person.prototype.display = function () {
        console.log("first name: " + this.fname + "last name :" + this.lname);
    };
    return person;
}());
var obj = new person("aangi", "shah");
console.log("constructor call :" + obj.fname + obj.lname);
obj.display();
//static keyword
var staticperson = /** @class */ (function () {
    function staticperson() {
    }
    staticperson.disp = function () {
        console.log("person name is : " + staticperson.names);
    };
    return staticperson;
}());
staticperson.names = "zeel";
staticperson.disp();
//instanceof operator
var myclass = /** @class */ (function () {
    function myclass() {
    }
    return myclass;
}());
var m = new myclass();
console.log(m instanceof myclass);
