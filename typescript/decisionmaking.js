//if  -else statement
var a = 10;
if (a < 0) {
    console.log("a is less than 0");
}
else {
    console.log("a is greater than 0");
}
//else if statement
var marks = 30;
if (marks < 33) {
    console.log(" it is fail");
}
else if (marks < 50) {
    console.log("it is pass");
}
else if (marks > 85) {
    console.log("it is A+");
}
else {
    console.log("it is failed");
}
//nested if statement
var n1 = 10, n2 = 22, n3 = 25;
if (n1 >= n2) {
    if (n1 >= n3) {
        console.log("The largest number is: " + n1);
    }
    else {
        console.log("The largest number is: " + n3);
    }
}
else {
    if (n2 >= n3) {
        console.log("The largest number is: " + n2);
    }
    else {
        console.log("The largest number is: " + n3);
    }
}
//switch statement
var grade = "F";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("good");
        break;
    case "C":
        console.log("fair");
        break;
    case "D":
        console.log("poor");
        break;
    default:
        console.log("Invalid");
        break;
}
