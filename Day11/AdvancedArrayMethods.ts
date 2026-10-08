
let numbers :number[]=[1,2,3,4,5];




// 6.every()-checks if all elements satisfy a condition
// Retrun true if all elements pass the condition,else false

// Synatx: array.every(function(function(currentValue,index,array){}))

// EX1 :
let allEven=numbers.every((element)=>element%2==0);
console.log("Are all numbers are even?",allEven);      //false


// Ex2 :
let allGreaterThanOne=numbers.every((element)=>element>1);
console.log("Are all numbers greater than or equal to one?",allGreaterThanOne);      //true

// Ex3 :
let allPositive=numbers.every((element)=>element>0);
console.log("Are all numbers Positive?",allPositive);      //true

