var arr_name:number[]=[1,3,5,6];
console.log(arr_name[2]);

//array object

var sum:number[]=new Array(4);
for(var i=0;i<sum.length;i++)
{
    sum[i]=i*2;
    console.log(sum[i]);
}

var names:string[]=new Array('aangi','zeel','manushi');
for(var i=0;i<names.length;i++)
{
    console.log("names of array :"+names[i]);
}


//array in for-in loop
var j:any;
var num:number[]=[20,30,40];
for(j in num)
{
    console.log(num[j]);
}

//passing array to function
let arr:string[]=new Array("aangi","shah");
function  display(arr_name:string[]){
    for(let i=0;i<arr_name.length;i++)
    console.log(arr[i]);
}
display(arr);

//function return an array
function disp():string[]
{
    return new Array("hello","how are you");
}
let nums:string[]=disp()
    for(let j in nums)
    {
        console.log(nums[j])
    }
