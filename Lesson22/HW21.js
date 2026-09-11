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

// //```javascript
// // Объявляем функцию-конструктор Account с параметрами iban, owner и balance
// function Account(iban, owner, balance) {
//     // Присваиваем свойству iban текущего объекта переданное значение iban
//     this.iban = iban;
//     // Присваиваем свойству owner текущего объекта переданное имя владельца
//     this.owner = owner;
//     // Присваиваем свойству balance текущего объекта начальную сумму баланса
//     this.balance = balance;

//     // Создаем метод deposit для пополнения счета
//     this.deposit = function(amount) {
//         // Проверяем, что сумма пополнения строго больше нуля
//         if (amount > 0) {
//             // Увеличиваем текущий баланс на указанную сумму
//             this.balance += amount;
//             // Возвращаем true, означающее успешное пополнение
//             return true;
//         // Закрываем блок условия if
//         }
//         // Если сумма меньше или равна нулю, возвращаем false (ошибка)
//         return false;
//     // Закрываем функцию deposit
//     };

//     // Создаем метод withdraw для снятия денег со счета
//     this.withdraw = function(amount) {
//         // Проверяем, что сумма больше нуля и на балансе достаточно средств для снятия
//         if (amount > 0 && this.balance >= amount) {
//             // Уменьшаем текущий баланс на указанную сумму
//             this.balance -= amount;
//             // Возвращаем true, означающее успешное снятие
//             return true;
//         // Закрываем блок условия if
//         }
//         // Если условия не выполнены, возвращаем false (ошибка снятия)
//         return false;
//     // Закрываем функцию withdraw
//     };

//     // Создаем метод getBalance для получения текущего состояния счета
//     this.getBalance = function() {
//         // Возвращаем текущее значение свойства balance
//         return this.balance;
//     // Закрываем функцию getBalance
//     };
// // Закрываем функцию-конструктор Account
// }

// // Создаем первый объект счета с помощью конструктора new Account
// const acc1 = new Account("KZ1001", "Алексей Иванов", 1000);
// // Создаем второй объект счета с помощью конструктора new Account
// const acc2 = new Account("KZ1002", "Мария Смирнова", 500);
// // Создаем третий объект счета с помощью конструктора new Account
// const acc3 = new Account("KZ1003", "Иван Петров", 2000);

// // Помещаем все три созданные объекта счетов в один массив accounts
// const accounts = [acc1, acc2, acc3];
// // Выводим в консоль текстовый заголовок для списка счетов
// console.log("Список всех счетов:");
// // Проходимся циклом forEach по каждому элементу (аккаунту) в массиве accounts
// accounts.forEach(acc => {
//     // Выводим в консоль строку с данными о счете, вызывая метод getBalance() для получения баланса
//     console.log(`Счет: ${acc.iban}, Владелец: ${acc.owner}, Баланс: ${acc.getBalance()}`);
// // Закрываем callback-функцию и метод forEach
// });

// // Объявляем функцию transfer, принимающую счет отправителя, счет получателя и сумму
// function transfer(account1, account2, amount) {
//     // Создаем объект transaction для сохранения информации о текущем переводе
//     const transaction = {
//         // Записываем объект счета отправителя в свойство account1
//         account1: account1,
//         // Записываем объект счета получателя в свойство account2
//         account2: account2,
//         // Записываем сумму перевода в свойство amount
//         amount: amount,
//         // Создаем метод transactionInfo для вывода статуса транзакции
//         transactionInfo: function() {
//             // Проверяем, существует ли в объекте свойство error (наличие ошибки)
//             if (this.error) {
//                 // Если ошибка есть, выводим сообщение с текстом ошибки и деталями перевода
//                 console.log(`❌ Ошибка перевода: ${this.error}. (Попытка перевести ${this.amount} от ${this.account1.owner} к ${this.account2.owner})`);
//             // Блок else выполняется, если свойства error нет (транзакция успешна)
//             } else {
//                 // Выводим сообщение об успешном переводе и показываем новый остаток на счете отправителя
//                 console.log(`✅ Успешный перевод: ${this.amount} от ${this.account1.owner} к ${this.account2.owner}. Новый баланс отправителя: ${this.account1.getBalance()}`);
//             // Закрываем блок else
//             }
//         // Закрываем функцию transactionInfo
//         }
//     // Закрываем объект transaction
//     };

//     // Проверяем корректность суммы перевода (сумма должна быть больше нуля)
//     if (amount <= 0) {
//         // Если сумма некорректна, добавляем в объект транзакции новое свойство error с текстом
//         transaction.error = "Сумма перевода должна быть больше нуля";
//         // Прерываем выполнение функции и возвращаем объект транзакции с ошибкой
//         return transaction;
//     // Закрываем блок проверки суммы
//     }

//     // Вызываем метод снятия денег со счета отправителя и сохраняем результат (true/false) в переменную
//     const withdrawSuccess = account1.withdraw(amount);
    
//     // Проверяем, успешно ли прошло снятие средств
//     if (withdrawSuccess) {
//         // Если снятие прошло успешно (true), зачисляем эту же сумму на счет получателя
//         account2.deposit(amount);
//     // Если функция withdraw вернула false (не хватило денег)
//     } else {
//         // Добавляем в объект транзакции свойство error с описанием причины сбоя
//         transaction.error = "Недостаточно средств на счете списания";
//     // Закрываем блок else
//     }

//     // Возвращаем сформированный объект транзакции в место вызова функции
//     return transaction;
// // Закрываем функцию transfer
// }

// // Выводим в консоль разделитель для визуального удобства перед тестами
// console.log("\n--- Тестирование переводов ---");

// // Выполняем перевод 300 единиц с acc1 на acc2, результат сохраняем в successTx
// const successTx = transfer(acc1, acc2, 300);
// // Вызываем метод вывода информации об этой транзакции (выведет сообщение об успехе)
// successTx.transactionInfo();

// // Пытаемся перевести 1500 единиц с acc2 на acc3, результат сохраняем в failedTx
// const failedTx = transfer(acc2, acc3, 1500);
// // Вызываем метод вывода информации об этой транзакции (выведет ошибку нехватки средств)
// failedTx.transactionInfo();
// // Проверяем и выводим в консоль факт наличия свойства error в объекте неуспешной транзакции
// console.log("Объект неуспешной транзакции содержит поле error:", failedTx.hasOwnProperty('error'));

// // Пытаемся выполнить перевод отрицательной суммы (-50), результат сохраняем в invalidTx
// const invalidTx = transfer(acc3, acc1, -50);
// // Вызываем метод вывода информации (выведет ошибку некорректной суммы)
// invalidTx.transactionInfo();
