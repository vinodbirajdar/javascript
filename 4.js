// export default function sum(a,b){
//     console.log("the sum of two numbers is",a+b);
// }

function showTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    var session = "AM";
    if(hours == 0){
        hours =12;
    }
    if(hours > 12){
        hours = hours-12;
        session = "PM";
    }
    //to add 0 if the hours is lessser than 10
    hours = (hours < 10) ? "0"+ hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    var time = hours+":"+minutes+":"+seconds+":"+session;
    document.getElementById('time').innerText = time;
    document.getElementById("time").textContent = time;
        setTimeout(showTime,1000);
    }
    showTime();


