//multiply a given number after 5 seconds
 var inputNum = prompt("please enter the number");//4
 function mul(x){
     setTimeout(()=>{
     console.log("number", inputNum*2);
     },5000);
 }



