//function sum(a, b) {
// return a + b;
//}

//let result = sum(1, 2);
//alert(result);
const calculateEngravingPrice = function (message = '', pricePerWord = 0) {
  return pricePerWord * message.split(' ').length;
};
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
);

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
);
