let mess=new String("hello Aangi..");
console.log(mess);
console.log(mess.length);


//string method
let str="Aangi Shah";
let str1="hello";
let str2="AangiShah";
let str3="hello, how are you ??";
let str5="AANGI"
console.log("char At :"+str2.charAt(5));
console.log("concate the String :"+str1.concat(str2));
// console.log("ends with string :"+str2.endsWith("Shah"));
// console.log("include the string :"+str3.includes("are"));

console.log("char at code :"+str1.charCodeAt(2));
console.log("Index of :"+str1.indexOf('o'));
console.log("last index of :"+str3.lastIndexOf("how"));
console.log("local compare :"+str2.localeCompare("Aangi Shah"));
console.log("match the string :"+str.match(str1));
console.log("Replace the string :"+str3.replace("hello","hii"));
console.log("serach the string :"+str3.search("you"));
//var str4 = "Apples are round, and apples are juicy."; 
console.log("split the string :"+str3.split(" ",3));
console.log("sub string :"+str.substring(0,8));
console.log("upper case :"+str1.toUpperCase());
console.log("lower case :"+str5.toLowerCase());
console.log("local lower case :"+str.toLocaleLowerCase());
console.log("local upper case :"+str3.toLocaleUpperCase());
console.log("to string :"+str3.toString());
console.log("value of :"+str1.valueOf());