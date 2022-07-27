//The flat() method creates a new array by flattening a nested array up to the specified depth.

let numbers = [1,2,[3,4,[5,6,[7,8]]]]; //3 nested array 

//reducing nesting by flattening the array to depth 2 
let flattenArray  = numbers.flat();
console.log(flattenArray);


// flat() to Remove Holes in Array
let flatarr = [,,,,4,5,6,,,,,"array"];
console.log(flatarr.flat());


//FlatMap

let flatMappedNumbers = [10,13,23,,,,];
let flattenedNumbers = flatMappedNumbers.flatMap((x) => [x ** 2]);
console.log("flattenedNumbers",flattenedNumbers);