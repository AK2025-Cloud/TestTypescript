//Method Overloading and Construnctor overlaoding in typescript


class Calculator
{

    constructor(); //Default constructor
    constructor(a:number,b:number);   //Paramaterized construnctor

    constructor(a?:number,b?:number)
    {
        if(a!==undefined && b!==undefined)
        {
            console.log("Sum of a & b:",(a+b));
        }
        else
        {
            console.log("Deafult construnctor called...")
        }
    }

 
 // Method Overloading 
   add(a:number,b:number):number;
   add(a:number,b:number,c:number):number;

   add(a:number,b:number,c?:number):number
   {
        if(c!==undefined)
        {
            return a+b+c;
        }
        return a+b;
   }



}


//usages 

//constructor overlaoding 
let calc1 = new Calculator();
let calc2 = new Calculator();

//Method Overlaoding 
console.log("Adding 2 number from s1:", calc1.add(10,20));
console.log("Adding 3 number from s1:",calc1.add(20,20,10));


console.log("Adding 2 number from s2:", calc2.add(10,20));
console.log("Adding 3 number from s2:",calc2.add(20,20,10));

