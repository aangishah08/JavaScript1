class person{
    fname:string
    lname:string

    constructor(fname,lname)
    {
        this.fname=fname
        this.lname=lname
    }
    display():void{
        console.log("first name: "+this.fname+"last name :"+this.lname);
    }
}
var obj=new person("aangi","shah")
console.log("constructor call :"+obj.fname+obj.lname)
obj.display()

//static keyword
class staticperson{
    static names:string
    static disp():void{
        console.log("person name is : "+staticperson.names);
    }
}

staticperson.names="zeel"
staticperson.disp()

//instanceof operator
class myclass{}
var m=new myclass()
console.log(m instanceof myclass)
