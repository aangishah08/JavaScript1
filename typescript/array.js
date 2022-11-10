var arr_name = [1, 3, 5, 6];
console.log(arr_name[2]);
//array object
var sum = new Array(4);
for (var i = 0; i < sum.length; i++) {
    sum[i] = i * 2;
    console.log(sum[i]);
}
var names = new Array('aangi', 'zeel', 'manushi');
for (var i = 0; i < names.length; i++) {
    console.log("names of array :" + names[i]);
}
//array in for-in loop
var j;
var num = [20, 30, 40];
for (j in num) {
    console.log(num[j]);
}
//passing array to function
var arr = new Array("aangi", "shah");
function display(arr_name) {
    for (var i_1 = 0; i_1 < arr_name.length; i_1++)
        console.log(arr[i_1]);
}
display(arr);
//function return an array
function disp() {
    return new Array("hello", "how are you");
}
var nums = disp();
for (var j_1 in nums) {
    console.log(nums[j_1]);
}
