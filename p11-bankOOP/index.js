// My Bank OOP: Project#11 Assigment No.1
// By SRAWAR FARIDI, bATCH 46
import chalk from 'chalk';
import inquirer from 'inquirer';
class Customer {
    firstName;
    lastName;
    accountNumber;
    balance;
    constructor(firstName, lastName, accountNumber, initialBalance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
}
class Bank {
    customers = [];
    createAccount(firstName, lastName, initialBalance) {
        const accountNumber = this.generateAccountNumber();
        const customer = new Customer(firstName, lastName, accountNumber, initialBalance);
        this.customers.push(customer);
        return customer;
    }
    generateAccountNumber() {
        // Generate a random 6-digit account number
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
    deposit(customer, amount) {
        customer.balance += amount;
    }
    withdraw(customer, amount) {
        if (customer.balance >= amount) {
            customer.balance -= amount;
        }
        else {
            console.log(chalk.red.bold('Insufficient funds.'));
        }
    }
}
const myBank = new Bank();
async function bankService() {
    const service = await inquirer.prompt({
        type: 'list',
        name: 'select',
        message: 'Please select a service:',
        choices: ['Create Account', 'Deposit', 'Check Balance', 'Withdraw', 'Exit'],
    });
    if (service.select === 'Create Account') {
        const { firstName, lastName, initialBalance } = await inquirer.prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'Enter first name:',
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Enter last name:',
            },
            {
                type: 'number',
                name: 'initialBalance',
                message: 'Enter initial balance:',
            },
        ]);
        const customer = myBank.createAccount(firstName, lastName, initialBalance);
        console.log(chalk.green.bold(`Account created for ${customer.firstName} ${customer.lastName} with account number ${customer.accountNumber}.`));
    }
    else if (service.select === 'Deposit') {
        const { accountNumber, amount } = await inquirer.prompt([
            {
                type: 'input',
                name: 'accountNumber',
                message: 'Enter account number:',
            },
            {
                type: 'number',
                name: 'amount',
                message: 'Enter the deposit amount:',
            },
        ]);
        const customer = myBank.customers.find((c) => c.accountNumber === accountNumber);
        if (customer) {
            myBank.deposit(customer, amount);
            console.log(chalk.green.bold(`Deposited ${amount} into ${customer.firstName}'s account. New balance: ${customer.balance}`));
        }
        else {
            console.log(chalk.red.bold('Account not found.'));
        }
    }
    else if (service.select === 'Check Balance') {
        const { accountNumber } = await inquirer.prompt({
            type: 'input',
            name: 'accountNumber',
            message: 'Enter account number:',
        });
        const customer = myBank.customers.find((c) => c.accountNumber === accountNumber);
        if (customer) {
            console.log(chalk.green.bold(`Balance for ${customer.firstName}'s account: ${customer.balance}`));
        }
        else {
            console.log(chalk.red.bold('Account not found.'));
        }
    }
    else if (service.select === 'Withdraw') {
        const { accountNumber, amount } = await inquirer.prompt([
            {
                type: 'input',
                name: 'accountNumber',
                message: 'Enter account number:',
            },
            {
                type: 'number',
                name: 'amount',
                message: 'Enter the withdrawal amount:',
            },
        ]);
        const customer = myBank.customers.find((c) => c.accountNumber === accountNumber);
        if (customer) {
            myBank.withdraw(customer, amount);
            console.log(chalk.green.bold(`Withdrawn ${amount} from ${customer.firstName}'s account. New balance: ${customer.balance}`));
        }
        else {
            console.log(chalk.red.bold('Account not found.'));
        }
    }
    else if (service.select === 'Exit') {
        console.log(chalk.blue.bold('Goodbye!'));
        process.exit(0);
    }
    bankService();
}
console.log(chalk.blue.bold('Welcome to the Console Bank System!'));
bankService();
// Commands used in it:
// npm i inquirer
// npm i @types/inquirer
// npm i @faker-js/faker
// npm i chalk@4.1.2
