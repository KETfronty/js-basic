// Task 1

//

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

//TAsk

function shuffle(arr)


//Task
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];
function getAverageAge(arr) {
  return arr.reduce((sum, elem) => sum + elem.age, 0);
}
console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

//TAsk
function unique(arr)          {
    return arr.filter(function(item,index,array){
        return array.indexOf(item) === index;
    })
    }
  
  
  let strings = ["Привіт", "Світ", "Привіт", "Світ",
    "Привіт", "Привіт", "Світ", "Світ", ":-O"
  ];
  
  alert( unique(strings) ); // Привіт, Світ, :-O
  //Task
  let users = [
    {id: 'іван', name: "Іван Іванко", age: 20},
    {id: 'ганна', name: "Ганна Іванко", age: 24},
    {id: 'петро', name: "Петро Петренко", age: 31},
  ];
  
  let usersById = groupById(users);
  console.log(usersById);
  
 function  groupById (users){

    return users.reduce((acc, currentValue) => ({...acc, [currentValue.id]:currentValue}), {})
 }