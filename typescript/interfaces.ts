//object of interface

interface myInterface{
    name:string,
    age:number
    getdata:()=>string
}
 var display:myInterface={

    name:"Aangishah",
    age:22,
    getdata:():string=> {return (`hello ${display.name}`);}
 }
 console.log("object of display")
 console.log("name :"+display.name)
 console.log("age :"+display.age)
 console.log("method calling :"+display.getdata())

 //union type interface:

 interface uniInterface{
    program:string,
    cmd:string[]|string|(()=>string)
 }
 console.log("string array in cmd :")
 var data:uniInterface={
    
    program:"hello",
    cmd:["javascript","html","css"]
}
console.log(data.program)
console.log(data.cmd[0])
console.log(data.cmd[1])
console.log(data.cmd[2])

console.log("string in cmd :")
 data={program:"hello aangi",cmd:"how are you?"}
 console.log(data.program)
 console.log(data.cmd)

 console.log("method in cmd :")
 data={program:"hello zeel",cmd:()=>{return "by zeel";}}
 console.log(data.program)
 var fn:any=data.cmd
 console.log(fn())



//Single Interface Inheritance

interface person{
    fname:string,
    lname:string
}
interface ageperson extends person{
    age:number
}
var getdata:ageperson={
    fname:"Aangi",
    lname:"shah",
    age:22
}
console.log("first name :"+getdata.fname+"\n"+"last name :"+getdata.lname+"\n"+"age is :"+getdata.age)

//multiple Interface Inheritance

interface person{
    fname:string
    
}
interface personlname{
    lname:string
}
interface ageperson extends person,personlname{
    age:number
}

var getdata:ageperson={
    fname:"zeel",
    lname:"shah",
    age:14
}

console.log("first name :"+getdata.fname+"\n"+"last name :"+getdata.lname+"\n"+"age is :"+getdata.age)