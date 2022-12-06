let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ 1,2,3,4 ];
function getAverageAge(array){
    array.reduce((sum, elem) => sum +  elem,0)
}
console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28