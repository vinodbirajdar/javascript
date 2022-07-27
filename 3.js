function sum(a,b){
    return a+b;
}
function calculateFoodTotal(food, tip){
    
    tipPercentage = tip/100;
    tipAmount = food * tipPercentage;
    total = sum(food,tipAmount);
     return total
}
console.log(calculateFoodTotal(300,30));

//arrow function with implict return
const sumArr = (a, b) => a + b;
console.log(sumArr(21,34))

function sub(a,b){
    return a-b
}
console.log(sub(10,28));