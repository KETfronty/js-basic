function camelize(str) {
  str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1).join("")
    );
}
// Task 2
let arr1 = [5, 3, 8, 1];
function filtered(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

//Task 3
//Task 4
let arr2 = [5, 2, 1, -10, 8];
arr.sort((a,b) => b-a)

//Task 5 
let array = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(array);

let newArray = [...array].sort()

//TAsk 6
//TAsk7
let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let users = [ ivan, petro, mariya ];

let names = users.map((item) => item.name)

alert( names ); // Іван, Петро, Марія

//TAsk 8

let ivan = { name: "Іван", surname: "Іванко", id: 1 };
let petro = { name: "Петро", surname: "Петренко", id: 2 };
let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

let users = [ ivan, petro, mariya ];

let usersMapped = users.map(item => ({fullName:`${item.name}${item.surname}`,
id:item.id}))

/*
usersMapped = [
  { fullName: "Іван Іванко", id: 1 },
  { fullName: "Петро Петренко", id: 2 },
  { fullName: "Марія Мрійко", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Іван Іванко

//TAsk 9
let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let arr = [ petro, ivan, mariya ];

sortByAge(arr);

// now: [ivan, mariya, petro]
alert(arr[0].name); // Іван
alert(arr[1].name); // Марія
alert(arr[2].name); // Петро

//Task 11

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];
let getAverageAge = arr.map(item => item.age)

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28