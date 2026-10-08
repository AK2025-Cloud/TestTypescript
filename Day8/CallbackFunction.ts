//  A call back function is a function that is passed as an argument to another function and is executed later.

// Example 2: 

function sum(a:number,b:number,callback:(result:number)=>void)
{
    let result=a+b;
    callback(result);        //executing the callback function
}


//  callback function
function displayResult(result : number):void
{
    console.log(result);
}



// calling the function by passing the callback function
sum(10,20,displayResult);
