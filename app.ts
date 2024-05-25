#! /usr/bin/env node

import inquirer from "inquirer";

// Define the list of currencies and their exchange rates

let exchange_rate: any = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.65,
    "PKR": 278.31,
}

// Add more currencies and their exchange rate here


// Promt the user to select currencies to convert from and to

let user_answers = await inquirer.prompt([

    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR",]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currencies to convert in to:",
        choices: ["USD","EUR","JYP","CAD","AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

// Perform Currency Conversion By Using Formula

let from_amount = exchange_rate[user_answers.from_currency];
let to_amount = exchange_rate[user_answers.to_currency];
let amount = user_answers.amount

// Formula of Conversion 

let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display The Converted Amount

console.log(`converted Amount = ${converted_amount}`);

