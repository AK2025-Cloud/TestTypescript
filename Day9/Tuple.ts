/* 
Tuple in typescript : 
A tuple is a fixed length array where each elemnt has a specific type.
It helps in storing multiple fields of diffrent data types together.

*/




// Example 6 : Tuple Array (Array of Tuples)

let students:[number,string][]=[ [101,"John"],[102,"Peter"],[103,"Jack"] ];
console.log(students.length);

console.log(students[0]); //[ 101, 'John' ]
 let tp=students[0];
 console.log(tp[0]);
 console.log(tp[1]);
