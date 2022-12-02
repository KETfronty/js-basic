// Задача 1
let num1 = +prompt("number 1");
let num2 = +prompt("number 2");
alert(num1 + num2);

//Задача 3
let readNumber = () => {
  let number;
  do number = +prompt("Write a number");
  while (!isFinite(number));
  if (number === "" || number === null) return null;
  return number;
};

//Задача 4

let i = 0;
while(i!=10){
    i+=0.2;
}
//TAsk 5 

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
    
  //TAsk 6
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }