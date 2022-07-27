//using if else
let operator = prompt("enter the operator (+,-,/,*)");
let number1 = parseInt(prompt("Enter the first Number"));
let number2 = parseInt(prompt("Enter the second Number"));

let result;

//using if else
if(operator == '+'){
    result = number1 + number2;
}
else if(operator == '-'){
    result = number1 - number2;
}
else if(operator == '*'){
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log("result",result);


//using switch

switch(operator){
    case '+' :  
    result = number1 + number2;
    break;

    case '-' :  
    result = number1 - number2;
    break;

    case '*' :  
    result = number1 * number2;
    break;

    case '/' :  
    result = number1 / number2;
    break;

    default :
    console.log('Invalid operator');
    break;
}