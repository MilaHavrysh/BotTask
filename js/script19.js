const countTotalSalary = function (employees) {
  const salaries = Object.values(employees);
  let totalSalary = Number(0);
  //console.log(salaries);
  for (let salary of salaries) {
    totalSalary += salary;
  }
  return totalSalary;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500