//finding number of elements in array
let arrNumbers =[1,2,3,4,5,6,7];
let arrstring =["Welcome", "to", "the", "Array"];
let arrMixed = ["Welcom",45,true,'33'];
console.log("Array numbers length: ",arrNumbers.length);
console.log("Array string length:", arrstring.length);
console.log("Array mixed length",arrMixed.length);

//revese numbered array
let reverseNumber = arrNumbers.reverse();
console.log("Reversed Array Numbers",reverseNumber);

//revese array string
let reverseArrString = arrstring.reverse();
console.log("Reversed Array String",reverseArrString);

//reverse using Spread Operator
let spreadArr = [...arrstring].reverse();
console.log("Reverse using Spread Operator",spreadArr);
// languages.length can be used to find out 
// the number of times to loop over an array

let languages = ["javascript","Angular",true];
for(let  i =0; i < languages.length; i++){
    console.log(languages[i]);    
}