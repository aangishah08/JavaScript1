
//returning function and Parameterized function
// function sum(a,b):any{
//     let z=a+b;
//     return z;
// }

// function result(){
//     var r=sum(10,20);
//     console.log(r);
// }

// result();

//Default parameters

function cal(price,rate:number=30)
{   
    var discount=price*rate;
    console.log(discount);

}
cal(10);
cal(10,20);

