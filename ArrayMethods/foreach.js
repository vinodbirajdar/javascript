//forEach
let numbers = [1, 3, 4, 9, 8];
console.log(numbers.forEach((ele)=>{
    console.log(ele*ele) 
}))


//from()
let obj = {
    name:'John',
    age: 30,
    school: 'highschool'
}

let newArr =  Array.from(obj.school);

console.log("res",newArr);


//from() Method with a Set, removes duplicates
let setArr = new Set(["javascript","javascript","Angular","Web"]);
console.log(Array.from(setArr));