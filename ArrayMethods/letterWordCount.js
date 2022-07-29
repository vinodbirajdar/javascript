//output{'h':'3','u':'2'}

function letterCount(words){
    let result = {};//empty object to store letter and count
    //let  wordArr = words.split(' ');
   for(let word of words){
    if(word in result){
        result[word]++;
    }else{
        result[word] = 1;
    }
   }   
    return result;
}
console.log(letterCount("Hello how are  how you you you ?"));
//output { H: 1, e: 2, l: 2, o: 6, ' ': 8, h: 2, w: 2, a: 1, r: 1,y: 3, u: 3, '?': 1}

function abc(phrase){
    let  wordArr = phrase.split(' ');
   return letterCount(wordArr);
}
console.log(abc("Wlecome to ourf first"));//output { Wlecome: 1, to: 1, ourf: 1, first: 1 }