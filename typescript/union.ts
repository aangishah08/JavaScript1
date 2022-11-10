var type:string | Number;
type=12
console.log("types is number :"+type)
type="hello aangi shah"
console.log("types is string :"+type)

//passing union type in function parameter
function mysum(Value:string|number,Value2:string|number)
{
    if(typeof Value =="number" && typeof Value2 =="number")
    {
        return Value*Value2
    }
    else{
        return Value.toString() + Value2.toString()
    }
}
console.log(mysum(2,3))
console.log(mysum("aangi","shah"))

//passing union type in Array
var myarr:number[]|string[]
var i
myarr=[1,2,3]
console.log("numaric array :")
for(i=0;i<myarr.length;i++)
{
    console.log(myarr[i])
    }
myarr=['aangi','shah']
console.log("string array :")
for(i=0;i<myarr.length;i++)
{
    console.log(myarr[i])
}