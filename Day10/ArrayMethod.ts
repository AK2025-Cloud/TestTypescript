
let numbers: number[]=[1,2,3,4,5,6,7];
let fruites: string[]=["apples","oranges","bananas","mangoes"]

console.log("Number arrys:",numbers);
console.log("Fruit arrys:",fruites);





//  7.splice() -Add/remove elements from an array(From everywhere)
// Syntax : array.splice(start,deleteCount,item1,...itemN)

console.log("Current elements in fruits array:",fruites); // ['kiwi','pear','apple','banana','orange']

// Ex1: 
let removedElements=fruites.splice(1,2); // here 1 is starting index, 2 is represent how many elements to be removed
console.log("After slice(1,2):",fruites);  //[kiwi,banana,orange, mangoes]
console.log("Removed Elements:",removedElements)  //['pear','apple']

// Ex2 :
fruites.splice(1,0,'pipneapple','grape');
console.log("Aftre slice(1,0,'pipneapple','grape'):",fruites);  //['kiwi','pipneapple','grape','banana','orange','mangoes']

// Ex3 : 
fruites.splice(1,2,"mango","cherry");
console.log("Aftre splice(1,2,'mango','cherry'):",fruites); [ 'Kiwi', 'mango', 'cherry', 'oranges', 'bananas', 'mangoes' ] 
let bananaIndex=fruites.indexOf("banana",2);
console.log("Index of banan:",bananaIndex);


// 8.indexOf() - Finds the index of an element,If elemnt not found then retrun -1
// Syntax : array.indexOf(searchElement) (or) array.indexOf(searchElemet,StartingIndex)

// Ex1 :
let bananaIndex=fruites.indexOf("banana");
console.log("Index of banana :",bananaIndex); //3

// Ex 2 :
fruites.indexOf("banana");
 let papayaIndex=fruites.indexOf("banana");
 console.log("Index of Papaya:",papayaIndex) ; //-1

// Ex3
bananaIndex=fruites.indexOf("Banana",2);
console.log("index of banana:",bananaIndex); //3

-----------------------------------------


// 9.includes() -Check if an element exists
// True or false
// Synatx : array.includes(searchElement,fromIndex)
let isAppleExist=fruites.includes('apple');
console.log("Does fruites include apple?",isAppleExist);  //false
let isBananaExist=fruites.includes('mango');
console.log("Does fruites includes apple?",isBananaExist); //true


// 10.toString() -Convert array to string
// Synatx : array.toString()

console.log(numbers);
let numbersString=numbers.toString();
console.log("Converted Array To String:",numbersString); //1,2,3,4,5,6,7

let myarray:string[]=['w','e','l','c','o','m','e']
console.log("Original myarray: ",myarray )









