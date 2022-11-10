//object of interface
var display = {
    name: "Aangishah",
    age: 22,
    getdata: function () { return ("hello ".concat(display.name)); }
};
console.log("object of display");
console.log("name :" + display.name);
console.log("age :" + display.age);
console.log("method calling :" + display.getdata());
console.log("string array in cmd :");
var data = {
    program: "hello",
    cmd: ["javascript", "html", "css"]
};
console.log(data.program);
console.log(data.cmd[0]);
console.log(data.cmd[1]);
console.log(data.cmd[2]);
console.log("string in cmd :");
data = { program: "hello aangi", cmd: "how are you?" };
console.log(data.program);
console.log(data.cmd);
console.log("method in cmd :");
data = { program: "hello zeel", cmd: function () { return "by zeel"; } };
console.log(data.program);
var fn = data.cmd;
console.log(fn());
var getdata = {
    fname: "Aangi",
    lname: "shah",
    age: 22
};
console.log("first name :" + getdata.fname + "\n" + "last name :" + getdata.lname + "\n" + "age is :" + getdata.age);
var getdata = {
    fname: "zeel",
    lname: "shah",
    age: 14
};
console.log("first name :" + getdata.fname + "\n" + "last name :" + getdata.lname + "\n" + "age is :" + getdata.age);
