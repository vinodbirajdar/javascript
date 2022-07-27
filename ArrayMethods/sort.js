//sorting using sort()
let cities = ['Delhi','Mumbai','Pune','Bangalore'];
let sortedCities = cities.sort();
console.log("Sorted Cities", sortedCities);

//sort using custom function
// custom sorting an array of strings
var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

function len_compare(a, b){
    return a.length - b.length;
}

// sort according to string length
names.sort(len_compare);

console.log(names);