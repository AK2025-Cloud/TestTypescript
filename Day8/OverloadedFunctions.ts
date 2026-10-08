// step1 : write a signature of function
// step2 : implement a function
// step3 : calling function



// Example4 : Different return type

function greet(name:string):string;
function greet(age:number):string;
function greet(isMarried:boolean):string;

function greet(value:string |number |boolean):string
{
    if(typeof value==="string")
    {
        return `Hello ${value}`;
    }
    else if (typeof value==="number")
    {
        return `You are ${value} years old`;
    }
    else
    {
        let res:string = value?"married":"single";
        return res;
    }
}

console.log(greet("John"));
console.log(greet(25));
console.log(greet(true));
console.log(greet(false));
