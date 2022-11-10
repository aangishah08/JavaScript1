function getName(name)
{
    let greet;
    if(name==="Aangi")
    {
         greet="hii aangi ";
    }
    else{
         greet="hi there";
    }
    console.log(greet);
}
getName("Aangi");


for(var i=0;i<5;i++)
{
    console.log(i);
}

for(var i=1;i<=5;i++)// using var key word
{
    setTimeout(function(){console.log(i);},1000)
}

for(let i=1;i<=5;i++) //using let keyword
{
    setTimeout(function(){console.log(i);},1000)
}