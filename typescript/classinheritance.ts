//single inheritance

class customer{
    cname:String

    constructor(cname)
    {
        this.cname=cname
    }
}
class view extends customer{
    disp():void{
        console.log("display the customer name:"+this.cname)
    }
}
var c=new view("aangishah")
c.disp()

//multilevel inheritance
class root{
    str:string
}
class child extends root{}
class leaf extends child{}
var l=new leaf();

console.log(l.str="hello")

//methods Overriding in class inheritance
class person1{
    disp():void{
        console.log("this is parent class")
    }
}
class person2 extends person1{
    disp():void{
        super.disp()
        console.log("this is child class")
    }
}
var p2=new person2()
p2.disp()