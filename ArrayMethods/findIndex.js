//The findIndex() method returns the index of the first array element that satisfies the provided test function or else returns -1.
//syntax
//arr.findIndex(callback(element, index, arr),thisArg)

//Example 3: findIndex() with array

function isOdd(element){
    return element % 2 !== 0;
}
let numbers = [12,13,3,5,4];
let firstFoundIndex = numbers.findIndex(isOdd);
console.log("First found index ",firstFoundIndex);

//Example 3: findIndex() with arrow function
//Arrow function
let arrowFun = numbers.findIndex((element)=> element%2 !==0);
console.log("arrow function",arrowFun);

//Example 3: findIndex() with Object Elements

let team = [
    {team:"bBill",age:10},
    {team:"jack",age:10},
    {team:"peter",age:15},
    {team:"paul",age:30},
]

function isAdult(member){
    return member.age >= 18;
}
 team.findIndex(isAdult);
console.log("the team member is", team.findIndex(isAdult));// returns the first matched index ,
// in this case console will be 3 since thats ths first member whose age is above 18