/* 

Arrays in TypeScript

-An array is a special type of variable thta stores ultiple values.
-The values can be of the same data type or different data types.
-Arrays are declared using  `[]` or the generic `Array<T>` type.
-Indexing starts from 0.
-Arrays are an ordered collection of elements.

 */



let empNames:Array<string>=["John","Smith","Peter","Scott"];
let empIds: Array<number>=[101,102,103,104];
let data:Array<string | number>=[101,"John","smith",102,"Peter","scott"];
let mixedData:Array<any>=[1,"john",true,null];


// Example 5 : A function takes an Array and retrun an array

function  capitalizeWords(arr:string[]):string[]
{
    let result:string[]=[];
    for(let i=0;i<arr.length;i++)
    {
        result[i]=arr[i].toUpperCase();
    }
    return result;
}

let words:string[]=["hello","world","typescript","array"];
console.log(capitalizeWords(words));
