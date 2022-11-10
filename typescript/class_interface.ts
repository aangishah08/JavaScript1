interface person{
    fname:string;
}
class customer implements person{
    lname:string
    fname: string
    constructor(fname:string,lname:string){
        this.fname=fname
        this.lname=lname
    }
  
}
var obj=new customer("aangi","shah")
console.log("firstname :"+obj.fname+"\n"+"lastname :"+obj.lname)