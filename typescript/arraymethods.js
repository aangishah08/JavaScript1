var arr1 = ["aangi", "shah"];
var arr2 = [1, 2, 3, 4];
var arr3 = ["zeel", "shah",];
console.log("concate array :" + arr1.concat(arr3));
function num(element) {
    return (element <= 20);
}
console.log("Test Value : " + [12, 5, 8, 13, 4].every(num));
function nums(element) {
    return (element <= 20);
}
console.log("Test Value : " + [12, 5, 80, 130, 4].filter(nums));
arr2.forEach(function (Value) {
    console.log(Value);
});
console.log(arr2.indexOf(3));
console.log(arr2.lastIndexOf(4));
console.log(arr2.join("&"));
var numbers = [1, 4, 9];
console.log(numbers.map(Math.sqrt));
console.log(numbers.pop());
console.log(numbers);
console.log(numbers.push(10));
console.log(numbers);
console.log(numbers.reduce(function add(a, b) { return a + b; }));
console.log(numbers.reduceRight(function add(a, b) { return a + b; }));
console.log(numbers.reverse());
console.log(numbers.shift());
console.log(numbers);
console.log(numbers.unshift(11));
console.log(numbers);
var names = ['aangi', 'manushi', 'zeel', 'khushi'];
console.log(names.slice(0, 1));
console.log(names.sort());
console.log(names.splice(1, 0, "shah"));
console.log(names);
console.log(names.splice(2, 0));
console.log(names);
console.log(names.toString());
//  console.log(names.fill("shah",0,1));
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
console.log(fruits.copyWithin(2, 0, 2));
