//primer between starting and target numbers for ex starting 10,target 20

let startingNum = 10;
let targetNum = 20;

for(let i = startingNum; i <= targetNum; i++){
    let flag = 0;
    for(let j = 2; j < i; j++){
        if(i % j ==0){
            flag= 1;
            break;
        }
    }
    if(i > 1 && flag ==0){
        console.log(i); //11,13,17,19
    }
}