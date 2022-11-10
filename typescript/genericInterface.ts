interface People {  
    name: string  
     
}  
interface Celebrity extends People {  
    age: number
}  
function printName<T extends Celebrity>(theInput: T): void {  
    console.log(`Name: ${theInput.name} \nAge: ${theInput.age} `);  
}  
let player: Celebrity = {  
    name: 'Aangi shah', age: 22  
}  
printName(player);  

//class
class Student {  
    Id: number;  
    Name: string;  
  
    constructor(id:number,  name:string) {   
        this.Id = id;  
        this.Name = name;  
    }  
}  
function display<T extends Student>(per: T): void {  
    console.log(`${ st.Id} ${st.Name}` );  
}  
var st = new Student(101, "\nVirat Kohli");  
display(st);  
