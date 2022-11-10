export class Addition{  
    constructor(public x: number, public y: number){  
    }  
    Sum(){  
        console.log("SUM: " +(this.x + this.y));  
    }  
}  
export class Substraction{  
    constructor(public a: number, public b: number){  
    }  
    Substract(){  
        console.log("SUBSTRACTION: " +(this.a - this.b));  
    }  
}  