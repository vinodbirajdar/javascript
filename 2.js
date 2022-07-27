//Generators
// a generator can stop midway and then continues midway from where it was stopped.
import sum from '4.js';
console.log(sum(4,6));


function foo(){
    console.log("i")
    console.log("i s")
    console.log("i start")

}

//generator function
function* generate(){
    console.log("invoed first time ");
    yield 1;
    console.log("invoed second time ");
    yield 2;
}
let te = generate();

for(const g of te){
    console.log(g);
}
console.log(te.next());



