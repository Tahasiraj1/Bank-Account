class BankAccount {
    private balance: number;
    private accountNumber: string;
    private accountHolder: string;

    constructor(accountNumber: string, accountHolder: string){
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = 0; // Initial balance is 0.
    }

// Method to deposit.

    deposit(amount: number) {
        if (amount <= 0) {
            console.log("Deposit amount must be positive.");
            return;
        }
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    }

// Method to withdraw.

    withdraw(amount: number) {
        if (amount <= 0) {
            console.log("withdraw amount must be positive.");
        return;
        }
        if (amount > this.balance) {
            console.log("Insufficient balance.");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
    }

// Method to check balance.

    checkBalance() {
        console.log(`Account balance is ${this.balance}.`);
    }

// Method to get account details.

    getAccountDetails() {
        console.log(`Account Number: ${this.accountNumber}, Account Holder: ${this.accountHolder}, Balance: ${this.balance}`);
    }
};

// Creating new bank account.

let myAccount = new BankAccount("12345", "Taha Siraj");

// Getting account details.

myAccount.getAccountDetails();

// Depositing money.

myAccount.deposit(5000);

// Withdrawing money.

myAccount.withdraw(2500);

// Checking balance.

myAccount.checkBalance();

// Try to withdraw more than account balance.

myAccount.withdraw(3000);

// Again getting account details.

myAccount.getAccountDetails();