function createTwoDArray(a,b){

    let arr=[];

    //creating 2d  array
    for(let i =0; i<a; i++){
        for(let j=0;j<b;j++){
            arr[i] = [];
            console.log(i,j,arr[i],arr[j]);
        }
    }
    //inserting  elements to array
    for(let i =0; i<a; i++){
        for(let j=0;j<b;j++){
            arr[i][j] = j;
            console.log(arr[i][j], j);
        }
    }
    return arr;
}

console.log( createTwoDArray(3,4))

