const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  const maxValue = Math.max(...values);
  let bestEmploye = '';
  //console.log(values);
  //console.log(maxV);
  //for (let i = 0; i <= values.length; i += 1) {
  //if (maxV === values[i]) {
  //const keys = Object.keys(employees);
  // console.log(keys);
  for (const employe in employees) {
    //console.log(employees);
    if (employees[employe] === maxValue) {
      bestEmploye = employe;
      //console.log(employe);
    }
  }

  return bestEmploye;
};
//console.log(findBestEmployee(developers, 99));

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
//const developers = {
//  result: 29,
// result: 35,
// result: 1,
// result: 99,
//};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
