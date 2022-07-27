//var num1 = prompt("enter number to get the table")
var num1 = 2;
function mul(){
   for(let i = 1; i<=10;i++){
    console.log("mul", num1*i);
   }
   
}mul();


//es6 arrow function
let num = ()=>{
   for(let i = 1; i<=10;i++ ){
      console.log("multiplication",num1*i);
   }
}
num(10);