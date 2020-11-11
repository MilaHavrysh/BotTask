//const Guest = function(name, sex, number) {
    //this.name = name;
    //this.sex = sex;
   // this.number = number;
   // this.guestHello = function () {
   //    console.log(`Hello ${this.name}, your ${this.number} is waiting you!`)
   // };

   // this.counterSex = function () {
   //     let man = 0;
   //     let woman = 0;
    //    if (this.sex==='man') { man += 1 }
    //     else { woman += 1 }
     //   console.log(man);
     //   console.log(woman);
    //}
//};
    

//const guest = new Guest('Iren', 'women', 'single')
//const mark = new Guest('Mark', 'man', 'doble')

//console.log(guest)
//console.log(guest.guestHello())
//console.log(guest.counterSex())
//console.log(mark)
//console.log(mark.guestHello())
//console.log(mark.counterSex())

//const guest = function (name, sex, number) {
    //this.name = name;
    //this.sex = sex;
    //this.number = number;
    //this.guestHello = function () {
    //console.log(`Hello ${name}, your ${number} is waiting you!`)
//}

  // const counterSex = function (sex) {
  //  let man = 0;
   // let woman = 0;
   //  if (sex==='man') { man += 1 }
   //  else { woman += 1 }
  //   console.log(man);
  //   console.log(woman);
    
//};

//console.log(guest('Iren', 'women', 'single'))
//console.log(counterSex('woman'))
//console.log(guest('Mark', 'man', 'doble'))
//console.log(counterSex('man'))

//const Manager = function (name, sales, product) {
    //this.name = name;
    //this.sales = sales;
    //this.product = product;
    //this.sall = function () {
    //    this.sales += 1;
    //    return `${this.name} sold ${this.sales} ${this.product}`
    //}
//}

//const mango= new Manager('Mango', 10, 'TV')
//console.log(mango)
//console.log(mango.sall())
const animal = { eats: true };
const dog = { barks: true };

dog.__proto__ = animal;

// В dog можно найти оба свойства
console.log(dog.barks); // true
console.log(dog.eats); // true
    

   

