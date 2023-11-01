#!/usr/bin/env node
import inquirer from "inquirer";

// const conversionRates = {
  let conversionRates = {
  "PKR": {
    "USD": 0.0036,
    "GBP": 0.0030,
    "PKR": 1
  },
  "GBP": {
    "USD": 1.21,
    "PKR": 335.80,
    "GBP": 1
  },
  "USD": {
    "PKR": 276.88,
    "GBP": 0.82,
    "USD": 1
  }
};

async function main() {
     
  const answer: {from: "PKR"| "USD" | "GBP",
      to: "PKR"| "USD" | "GBP",
      amount: number}
  = await inquirer.prompt([
    {
      type: "list",
      name: "from",
      choices: ["PKR", "USD", "GBP"],
      message: "Select your source currency: "
    },
    {
      type: "list",
      name: "to",
      choices: ["PKR", "USD", "GBP"],
      message: "Select your target currency: "
    },
    {
      type: "number",
      name: "amount",
      message: "Enter the conversion amount: "
    }
  ]);

  const { from, to, amount } = answer;

  if (from && to && amount) {
    if (from === to) {
      console.log(`No conversion needed. The result is ${amount} ${from}`);
    } else if (conversionRates[from] && conversionRates[from][to]) {
      const result = conversionRates[from][to] * amount;
      console.log(`Your conversion from ${from} to ${to} is ${result}`);
    } else {
      console.log("Invalid currency selection");
    }
  } else {
    console.log("Invalid inputs");
  }
}

main();

// Node.js project No.4.  Assignment No.2
// Packages updated
// >npm i inquirer 
// >npm i @types/inquirer 




// #!/src/bin/env node
// import inquirer from "inquirer"

// let Convertion = {
//     "PKR": {
//       "USD": 0.004434589800443458980044345898,
//       "GBP": 0.0037,
//       "PKR": 1
//     },
//     "GBP": {
//       "USD": 1.21,
//       "PKR": 271.79,
//       "GBP": 1
//     },
//     "USD": {
//       "PKR": 225.50,
//       "GBP": 0.83,
//       "USD": 1
//     }
//   }

//   const answer: {
//     from: "PKR"| "USD" | "GBP",
//     to: "PKR"| "USD" | "GBP",
//     amount: number
//   } = await inquirer.prompt([
//     {
//         type: "list",
//         name: "from",
//         choices: ["PKR", "USD", "GBP"],
//         message: "Select your currency: "
//     },
//     {
//         type: "list",
//         name: "to",
//         choices: ["PKR", "USD", "GBP"],
//         message: "Select your convertion currency: "
//     },
//     {
//         type: "number",
//         name: "amount",
//         message: "Enter your convertion amount: "
//     }
//   ]);

//   const {from, to, amount} = answer;

//   if(from && to && amount) {
//     let result = Convertion[from][to] * amount;
//     console.log(`Your convertion from ${from} to ${to} is ${result}`)
//   } else {
//     console.log("Invalid inputs")
//   }