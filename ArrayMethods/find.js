//The find() method returns the value of the first array element that satisfies the provided test function.
let numbers = [1,2,5,3,10,23];
function isEven(element){
    return element % 2 == 0;
}

//get the first even number
let evenNumber = numbers.find(isEven);
console.log(evenNumber);


//using arrow function
let firstOdd = numbers.find((element)=> element%2 == 1);
console.log("arr",firstOdd);

//find takes callback function as arguement