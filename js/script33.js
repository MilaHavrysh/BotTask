
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};


const account = {
  
 balance: 0,

 transactions: [],

  
    createTransaction(amount, type) {
        let id = this.transactions.length;
        this.transactions.push({ id, amount, type });
        return this.transactions
     },
      
       
    deposit(amount) {
        this.balance += Number(amount);
        this.createTransaction(amount, Transaction.DEPOSIT)
        return this.balance
    },

  
    withdraw(amount) {
        if (amount < this.balance) {
            this.balance -= Number(amount);
            this.createTransaction(amount, Transaction.WITHDRAW)
        }
        else{console.log('снятие такой суммы не возможно, недостаточно средств.')}

  },
  
    getBalance() {
       return this.balance
   },

  
    getTransactionDetails(id) {
        for (let i = 0; i < this.transactions.length; i += 1){
            if (i = id) {
                return this.transactions[i]
            }
        }
 },

    getTransactionTotal(type) {
        for (let key of this.transactions) {
            if (this.transactions[key] === type) {
                return this.transactions[key]
            }
        }

    },
};

console.log(account.createTransaction(500, 'deposit'))
//console.log(account.createTransaction(100, 'deposit'))
console.log(account.deposit(100))
console.log(account.deposit(300))
console.log(account.withdraw(8000))
console.log(account.getBalance())
console.log(account.getTransactionDetails(2))
console.log(account.getTransactionTotal(Transaction.WITHDRAW))