//TAsk 1
let salaries = {
  Іван: 100,
  Петро: 300,
  Марія: 250,
};

function sumSalaries(obj) {
  let sum = 0;
  for (let elem of Object.values(obj)) {
    sum += elem;
  }
  return sum;
}
alert(sumSalaries(salaries)); // 650
// TAsk 2
function count(obj) {
    return Object.keys(obj).length;
  }