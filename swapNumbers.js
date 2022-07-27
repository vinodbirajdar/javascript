///prompt is not a function of node, its runs only in the broweser. instead of prompt we can use the numbers here
var num1 = prompt("enter first number");
var num2 = prompt("enter first number");
function swap(){
    let temp;
    temp = num1;
    num1 = num2;
    num2 = temp;
    console.log("swapped numbers",temp);
     console.log("swapped num1",num1);
     console.log("swapped num2",num2)
}swap();

//es6 destructring 
let a=10;
let b=20;

[b,a] = [a,b];

console.log("swapped",a,b) // 20 10


//using arithmatic operators

let firsNum = parseInt(prompt("first number"));
let secondNum = parseInt(prompt("Second number"));
firsNum = firsNum + secondNum;
secondNum = firsNum - secondNum;
firsNum = firsNum - secondNum;
console.log(`The value of a after swapping: ${firsNum}`);
console.log(`The value of b after swapping: ${secondNum}`);

//take input from the users
let first = prompt('Enter the first variable: ');
let second = prompt('Enter the second variable: ');

// XOR operator
first = first ^ second
second = first ^ second
first = first ^ second

console.log(`The value of a after swapping: ${first}`);
console.log(`The value of b after swapping: ${second}`);

