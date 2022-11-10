function printName(theInput) {
    console.log("Name: ".concat(theInput.name, " \nAge: ").concat(theInput.age, " "));
}
var player = {
    name: 'Aangi shah', age: 22
};
printName(player);
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.Id = id;
        this.Name = name;
    }
    return Student;
}());
function display(per) {
    console.log("".concat(st.Id, " ").concat(st.Name));
}
var st = new Student(101, "\nVirat Kohli");
display(st);
