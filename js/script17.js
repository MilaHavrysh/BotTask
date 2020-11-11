const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  //console.log(values[0]);
  let effectWork = Number(0);
  let bestEmpl;
  for (let i = 0; i <= values.length; i += 1) {
    if (effectWork <= values[i]) {
      effectWork = values[i];
      bestEmpl = effectWork;
      //console.log(values[i]);
      //console.log(effectWork);
    }
  }
  //return effectWork;
  return bestEmpl;
};
//console.log(findBestEmployee(developers, 99));

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
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
