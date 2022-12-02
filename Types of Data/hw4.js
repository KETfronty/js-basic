//Завдання 2

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
let index = Math.floor(styles.length / 2);
styles.splice(index, 1, "Classics");
let deletedEl = styles.shift();
alert(deletedEl);
styles.unshift("Rap", "Reggae");

//Завдання 3 ????
//Завдання 4

function sumInput() {
  let num;
  let sum = 0;
  let arrayOfNum = [];
  do num = +prompt("Wrire a number", 0);
  while (num === "" || num === null || typeof num !== "number");
  arrayOfNum.push(num);
  for (let char of arrayOfNum) {
    sum += char;
    return sum;
  }
}
