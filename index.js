class BankAccount {
  constructor(accountHolder, accountType) {
    this.accountHolder = accountHolder;
    this.accountType = accountType;
    this._balance = 0;
  }

  deposit(amount) {
    this._balance += amount;
    return `Deposited ${amount}. Your new balance is ${this._balance.toLocaleString()}`;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      throw new Error(
        `Insufficient funds. Your current balance is $${this._balance.toLocaleString()}`
      );
    }
    this._balance -= amount;
    return `Withdrew $${amount}. Your new balance is $${this._balance.toLocaleString()}`;
  }

  checkBalance() {
    return `Your balance is ${this._balance.toLocaleString()}`;
  }
}

let account;

document.getElementById("actionButton").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const accountType = document.getElementById("accountType").value;

  if (!account) {
    account = new BankAccount(name, accountType);
  }

  const action = document.getElementById("action").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const messageEl = document.getElementById("message");

  try {
    switch (action) {
      case "deposit":
        if (isNaN(amount) || amount <= 0)
          throw new Error("Please enter a valid deposit amount");
        messageEl.innerText = account.deposit(amount);
        break;
      case "withdraw":
        if (isNaN(amount) || amount <= 0)
          throw new Error("Please enter a valid withdrawal amount");
        messageEl.innerText = account.withdraw(amount);
        break;
      case "balance":
        messageEl.innerText = account.checkBalance();
        break;
      default:
        messageEl.innerText = "Please select a valid action";
    }
  } catch (error) {
    messageEl.innerText = error.message;
  }
});
