// Anonymous functions (Unnamed function/Nameless function)

/* 
An anonymous function is a function that does not have a name.
Instead,it is assigned to a variable ,which acts as its name.

synatx : 
let variable = function(parameters)
{
    // function body
}
 
variable();  // Calling the function

 */

// Example 1 : Anonymous function

let mesg = function() : string
{
    return "Hello Typescript";
}

console.log(mesg());


// Example 2 : Anonymous function with parameters
let multiply=function(a:number,b:number):number
{
    return a*b;
}
console.log(multiply(10,20));
