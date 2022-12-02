//Задача 1 ????????????
function makeUser() {
  return {
    name: "Іван",
    ref: this,
  };
}
let user = makeUser();
alert(user.ref.name); // Який результат?

//Задача 2
let calculator = {
  read() {
    this.a = +prompt("Number 1 ?", 0);
    this.b = +prompt("Mumber 2 ?", 0);
  },

  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
console.log(123);
// Task 3
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

//Task 4

function Accumulator(value) {
  (this.value = value),
    (this.read = function () {
      return (this.value += +prompt("Число ?"));
    });
}
let accumulator = new Accumulator();

accumulator.read();
accumulator.read();

alert(accumulator.value);
