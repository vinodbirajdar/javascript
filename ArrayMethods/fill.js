//fill(value,start,end) start and end are optional

let fruits = ["Apple","Orange","Cherry","Mango"];
fruits.fill("grapes",0,1);
console.log(fruits); // grapes,Orange,Cherry,Mango


var prices = [651, 41, 4, 3, 6];

// filling every element of the array with '5'
new_prices = prices.fill(5);

console.log(prices);

console.log(new_prices); 


var rank = [8, 9, 3, 7];

// on passing negative index, counting starts from back
rank.fill(15, -2);

// prints the modified 'rank' array
console.log(rank);  // [ 8, 9, 15, 15 ]

// passing invalid index result in no change
rank.fill(15, 7, 8);

console.log(rank);  // [ 8, 9, 15, 15 ]

// passing invalid indexes
rank.fill(15, NaN, NaN);

console.log(rank);  // [ 8, 9, 15, 15 ]