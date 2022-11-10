var myTuple=['Aangi','shah',1,3];
console.log(myTuple[0]);
console.log(myTuple[1]);
console.log(myTuple[2]);
console.log(myTuple[3]);


//Empty tuples
var myTuple2:any=[]
myTuple2[0]=12;
myTuple2[1]='Aangi';
console.log(myTuple2[0]);
console.log(myTuple2[1]);

//tuples Operations push() & pop()
var myTuple3=[12,'Aangi',2,'shah']
console.log("before push :"+myTuple3.length)
myTuple3.push(20);
console.log(myTuple3)
console.log("after push :"+myTuple3.length)
myTuple3.pop();
console.log(myTuple3)
console.log("after pop"+myTuple3.length)

//update tuples
var myTuple4=['Aangi',2,'shah']
myTuple4[0]='zeel';
console.log("upadte the tuples:"+myTuple4[0]);
console.log(myTuple4)

//clear tuples
var myTuple5=['zeel',12]
myTuple5=[]
console.log("clear tuples:"+myTuple5)
console.log(myTuple5)

//Destructuring tuples
var myTuple6:any=['aangi','shah',22]
var [fname,lname,age]=myTuple6
console.log(fname)
console.log(lname)
console.log(age)

//passing tuple to function
var myTuple7=['aangi','shah']
function display(my_name:any) {
    for(let i=0;i<myTuple7.length;i++)
    console.log(myTuple7[i])
}
display(myTuple7)

