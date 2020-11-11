
 
const transaction = {
DEPOSIT: 'deposit',
WITHDRAW: 'withdraw',
};


const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    let id = this.transactions.length
    amount = Number(amount)
    let trans = { id, amount, type }
    this.transactions.push({ trans })
    //return trans
  },

  deposit(amount) {
    this.balance += Number(amount);
    this.createTransaction(amount, transaction['DEPOSIT'])
    //return this.balance
  },
  
  withdraw(amount) {
    if (this.balance >= Number(amount)) {
      this.balance -= Number(amount);
      this.createTransaction(amount, transaction['WITHDRAW']);
      //console.log(this.balance)
    }
    else { console.log('Cнятие такой суммы не возможно, недостаточно средств') }
  },
  
  getBalance() {
  console.log(this.balance);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const object of this.transactions) {
      for (const key in object) {
        //console.log(object[key])
        if (object[key] === id) {
          console.log(object[key])
          }
        }
        //return object
      
    }
  },

  
}

  
  

  

console.log(account.deposit(200));
console.log(account.deposit(100));
console.log(account.deposit(800));
console.log(account.deposit(500));
console.log(account.withdraw(20));
console.log(account.withdraw(5000));
//console.log(account.getBalance());
console.log(account.getTransactionDetails(1));
 


//console.log(account.transactions)
//console.log(account.createTransaction(1000, 'deposit'))
//console.log(account.createTransaction(200, type===transaction.DEPOSIT))
//console.log(account.deposit(5000))
 
  
    
 

  
//const Transaction = {
 // DEPOSIT: 'deposit',
 // WITHDRAW: 'withdraw',
//};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

//const account = {
  // Текущий баланс счета
  //balance: 0,

  // История транзакций
  //transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  //createTransaction(amount, type) {
  //  const id = this.transactions.length;
//amount = Number(amount);
   // this.transactions.push({ id, amount, type }); //записываем логи
   // return { id, amount, type };
  //},

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  //deposit(amount) {
    //if (this.isNumericc(amount)) {
    //  this.balance += Number(amount);
   //   this.createTransaction(amount, Transaction.DEPOSIT);
    //}
  //},

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  //withdraw(amount) {
    //if (this.isNumericc(amount)) {
    //  if (this.balance >= amount) {
    //    this.balance -= amount;
    //    this.createTransaction(amount, Transaction.WITHDRAW);
      //} else {
      //  console.log('снятие такой суммы не возможно, недостаточно средств.');
     // }
    //}
  //},

  /*
   * Метод возвращает текущий баланс
   */
  //getBalance() {
  //  return this.balance;
  //},

 
  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  //getTransactionTotal(type) {
   // let sum = 0;
    //for (const obj of this.transactions) {
    //  if (type === obj.type) {
    //    sum += obj.amount;
     // }
   /// }
   // return sum;
  //},

  //Проверка на число
 // isNumericc(value) {
   // return parseInt(value) >= 0 ? true : false;
 // },
//};

//Проверка работы программы.
//Закидываем тестовые значения.
//account.deposit(100);
//account.deposit(0);
//account.deposit(-100);
//account.deposit('100');
//account.deposit('-100');
//account.deposit('dsfse');
//account.deposit(null);
//account.deposit(undefined);
//account.deposit(NaN);
//account.deposit('');
//account.deposit(' ');

//console.log('должно вывести 200: ' + account.getBalance()); //200

//account.withdraw(50);
//account.withdraw(-100);
//account.withdraw('100');
//account.withdraw('-100');
//account.withdraw('dsfse');
//account.withdraw(null);
//account.withdraw(undefined);
//account.withdraw(0);
//account.withdraw('');
//account.withdraw(NaN);
///account.deposit(' ');

//console.log('должно вывести 50: ' + account.getBalance()); //50
//account.withdraw(1000); //должно вывести сообщение, что не хватает баланса
//console.log('должно вывести 50: ' + account.getBalance()); //50

//выводим объект по id
//console.log(account.getTransactionDetails(2)); //{id: 2, amount: "100", type: "deposit"}
//console.log(account.getTransactionTotal(Transaction.DEPOSIT)); //200
//console.log(account.getTransactionTotal(Transaction.WITHDRAW)); //150
