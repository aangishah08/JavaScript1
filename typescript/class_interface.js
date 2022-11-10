var customer = /** @class */ (function () {
    function customer(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    return customer;
}());
var obj = new customer("aangi", "shah");
console.log("firstname :" + obj.fname + "\n" + "lastname :" + obj.lname);
