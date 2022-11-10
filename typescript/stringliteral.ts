// Variable Assignment
type Pet = 'cat' | 'dog' | 'Rabbit';  
let pet: Pet;  
if(pet = 'cat'){  
    console.log("Correct");  
}
else
{  
    console.log("compilation error");  
};  

// Function Parameter
type FruitsName = "Apple" | "Mango" | "Orange";  
function showFruitName(fruitsName: FruitsName): void {  
    console.log(fruitsName);  
}  
showFruitName('Mango');   
  
//showFruitName('Banana');  