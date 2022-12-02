//Задача 1
let user = {};
user.name = "Ivan";
user.surname = "Smith";
user.name = "Petro";
delete user.name;






//ЗАДАЧА 2
let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "Вставай";
alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}




// ЗАДАЧА 3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function findSum(obj) {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries.key;
  }
  return sum;
}




//ЗАДАЧА 4
let menu = {
  width: 200,
  height: 300,
  title: "Моє меню",
};
multiplyNumeric(menu);
menu = {
  width: 400,
  height: 600,
  title: "Моє меню",
};

let multiplyNumeric = (object) => {
  for (let key in object) {
    if (typeof menu.key === "number") 
    menu.key *= 2;
  }
};