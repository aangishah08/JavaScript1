var x=5;// global scope

class numbers{

    num_val=3; //class variable
    static b=5; //static 

    storeNum():void{
        var z=10; //local scope
    }
}

console.log("global scope"+x);
console.log("static variable"+numbers.b);
var num=new numbers();
console.log("class variable:"+num.num_val);

