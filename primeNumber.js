//prime numbers are divisible by 1 and itself
let takeInput =  parseInt(prompt("Enter a positive number: "));
let isPrime = true;

if(takeInput == 1){
    console.log("number is 1 neither prime nor composite");
}else if(takeInput > 0){
    for (let i = 2; i < takeInput; i++) {
        if(takeInput % i == 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${takeInput} is a prime number`);
    } else {
        console.log(`${takeInput} is a not prime number`);
    }
}