//Task1

let salaries = {
  Іван: 100,
  Петро: 300,
  Марія: 250,
};

alert(sumSalaries(salaries)); // 650

function sumSalaries(salaries) {
  let sum = 0;
  for (let values of Object.values(salaries)) {
    sum += values;
  }
  return sum;
}
