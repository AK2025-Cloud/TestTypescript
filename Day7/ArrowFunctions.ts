
// Example 6 : Arrow Function with Rest  parametrs
let findElements=(...elements:(number | string)[]):number=>
{
    return elements.length;
}
console.log(findElements(3,"john",2,1,"scott"));
console.log(findElements(10,202,304,40,50));
console.log(findElements(3,"abc",2,1,"xyz",4,8));