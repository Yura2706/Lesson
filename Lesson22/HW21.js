function Account(iban, owner, balanse) {
  this.iban = iban;
  this.owner = owner;
  this.balanse = balanse;
  this.deposit = function (amount) {
    if (amount > 0) {
      this.balanse += amount;
      return true;
    }
    return false;
  };
  this.withdraw = function (amount) {
    if (amount > 0 && amount <= this.balanse) {
      this.balanse -= amount;
      return true;
    }
    return false;
  };
  this.getBalance = function () {
    return this.balanse;
  };
}

const account = new Account("IS1001", "Алексей Иванов", 1000);
const account2 = new Account("IS1002", "Алексей Иванов", 1000);
const account3 = new Account("IS1003", "Алексей Иванов", 1000);
const accounts = [account, account2, account3];
console.log(accounts);

accounts.forEach((acc) => {
  console.log(`Счет: ${acc.iban}, Владелец: ${acc.owner}, 
        Баланс: ${acc.getBalance()}`);
});
function transfer(account1, account2, amount) {
  const transaction = {
    account1: account1,
    account2: account2,
    amount: amount,
    transactionInfo: function () {
      if (this.error) {
        console.log(
          `❌ Ошибка перевода: ${this.error}. (Попытка перевести ${this.amount} от ${this.account1.owner} к ${this.account2.owner})`,
        );
      } else {
        console.log(
          `✅ Успешный перевод: ${this.amount} от ${this.account1.owner} к ${this.account2.owner}. Новый баланс отправителя: ${this.account1.getBalance()}`,
        );
      }
    },
  };
  if (amount <= 0) {
    transaction.error = "Сумма должна быть больше нуля";
    return transaction;
  }
  const withdrawSuccess = account1.withdraw(amount);
  if (withdrawSuccess) {
    account2.deposit(amount);
  } else {
    transaction.error = "Недостаточно средств на счете списания";
  }
  return transaction;
}

const successTx = transfer(account, account2, 300);
successTx.transactionInfo();
const failedTx = transfer(account2, account3, 1500);
failedTx.transactionInfo();
console.log(
  "Объект неуспешной транзакции содержит поле error:",
  failedTx.hasOwnProperty("error"),
);
const invalidTx = transfer(account3, account, -50);
invalidTx.transactionInfo();
