# Bank Account Management - Project Walkthrough

Welcome to the Bank Account Management tool. This application simulates a simple banking system where users can deposit, withdraw, and check their balance. In this document, we'll guide you on how the system works and break down how we've incorporated JavaScript classes, switch statements, and try-catch-finally constructs.

## Table of Contents

- [JavaScript Classes](#javascript-classes)
- [Switch Statements](#switch-statements)
- [Try-Catch-Finally Constructs](#try-catch-finally-constructs)
- [Using the Application](#using-the-application)

## JavaScript Classes

### **The BankAccount Class**

With the introduction of ES6, JavaScript added the `class` keyword. This modern feature provides a more structured and intuitive approach to defining and working with object constructors. Here's how it's used in our application:

```javascript
class BankAccount {
  constructor(accountHolder, accountType) {
    this.accountHolder = accountHolder;
    this.accountType = accountType;
    this._balance = 0;
  }
  deposit(amount) {
    this._balance += amount;
    return `Deposited ${amount}. Your new balance is ${this._balance}`;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      throw new Error("Insufficient funds");
    }
    this._balance -= amount;
    return `Withdrew ${amount}. Your new balance is ${this._balance}`;
  }

  checkBalance() {
    return `Your balance is ${this._balance}`;
  }
}
```

The above code snippet shows the core structure of the BankAccount class, which initializes a new bank account with properties like account holder name, account type, and a default balance of zero.

## Switch Statements

In our application, the user's choice of action (deposit, withdraw, or check balance) is determined using a switch statement. This ensures a clean and concise way of handling multiple conditions. An example from our code:

```js
switch (action) {
  case "deposit":
    // handle deposit
    break;
  case "withdraw":
    // handle withdrawal
    break;
  case "balance":
    // check balance
    break;
  default:
  // invalid action
}
```

## Try-Catch-Finally Constructs

Error handling is crucial in banking applications. Our system employs try-catch-finally constructs to gracefully handle potential errors like invalid inputs or insufficient funds:

```js
try {
  // Try to execute code
} catch (error) {
  // Handle errors
  messageEl.innerText = error.message;
} finally {
  // This code runs regardless of the outcome
}
```

## Using the Application

1. Input your Name and Select Account Type: Start by inputting your name and selecting the type of account you want (e.g., Savings, Current).
2. Choose an Action: Select whether you want to deposit, withdraw, or check balance.
3. Enter Amount: If you choose to deposit or withdraw, enter the desired amount.
4. Click Submit: The system will process your request and display the result or any relevant messages.

By following the above steps, you can effectively use the Bank Account Management tool. Happy Banking!
