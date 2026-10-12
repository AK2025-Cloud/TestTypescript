/* String  - text value or a combination of characters

1. Single quote - String Literal ('Single quote')
2. Double quote - String Literal ('Double quote')
3. backtick(``) -String template - 'When we try ro use a string variable insid4 another string value ${varaiable}'

Index of string start with 0  */

// Decalartion of String 

let str1:string ='This is a string  with single quote';
let str2:string ="This is a string  with Double quote";
let str3:string =`This is a string  with back tick`;

console.log(str1);
console.log(str2);
console.log(str3); 
// When to use back tick 
let num :number=10;

console.log("Number is :",num); //10 //valid
console.log("Number is : ${num}"); //not valid 
console.log('Number is :${num}'); //not valid
console.log(`Number is :${num}`); //Number is :10 valid 



// String Methods

let str: string ="Hello, Typescript!";

//1. length- find the length of a string (how many nuber of charcters)
console.log(str.length); 18

// 2.toTpperCase() and toLowerCase()

console.log(str.toUpperCase());
console.log(str.toLowerCase())


//3. charAt(index) and indexof(string)

console.log("Character at 4th index:",str.charAt(4)); //o
console.log("Index of type:", str.indexOf("Type"));  //7

// 4.substring(Starting index, ending index)
// ending index is exclussive
console.log(str.substring(0,5));


// 5.includes(): returns true or false (boolean)
console.log(str.includes("abc")); //false
console.log(str.includes("Typescript")); // true
console.log(str.includes("!")); // true
console.log(str.includes("TYPESCRIPT")); // false


//6. startWith() and endsWith() ---> retruens a boolean value (true/false)
console.log(str.startsWith("Hello"));  // true
console.log(str.endsWith("!"));        //true

console.log(str.endsWith("abc"));        //false

//7.replace()

console.log("Replaced string :" ,str.replace("Typescript","word"));


//8. split() - breake the string into multipleased on  the delimeter , retruns an array 

//Ex1: 
let words:string []= str.split(" ");
console.log("After splitting string:",words); //['Hello','TypeScript!']

// Ex2: 
let mystring:string="abc@gamil.com,xyzabc";
console.log(mystring.split(","));
let arr=mystring.split(",");

console.log("email:",arr[0]);
console.log("Password:",arr[1]);



// 9. trim(), trimStart(),trimEnd()

console.log("Original string:", mystring);   //welcome to typescript
console.log("trim string:", mystring.trim());     //welcome to typescript
console.log("trimStart string:",mystring.trimStart()); //welcome to typescript
console.log("trimEnd string:",mystring.trimEnd());    

// 10. concat()

str1 ="Welcome";
str2="to typescript";
str3="and javascript";

console.log("After concatenation:",str1.concat(str2)); //welcome typescript
console.log("After concatenation:",str1+str2);  //this is alternative but not recomended
console.log("Welcome".concat("to typescript")); //welcome typescript
console.log(str1.concat(str2).concat(str3)); //welcome typescript and javascript



//concept of string imutability 

// num=10;

let res=num+5;
console.log(res); //15
console.log(num);  //10


str1="Welcome";

let modifiedstring=str1.concat("to typescript");
console.log(str1);//Welcome

// multiline string

let multiline:string=`welcome
      to typescript`;

console.log(multiline);







