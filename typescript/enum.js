var days;
(function (days) {
    days[days["mon"] = 0] = "mon";
    days[days["the"] = 1] = "the";
    days[days["wed"] = 2] = "wed";
})(days || (days = {}));
// let day:days
// day=days.wed
// console.log(day);
function whichday(day) {
    return day;
}
console.log(whichday(days.mon));
