#! /usr/bin/env node
import inquirer from "inquirer";
let { num1, num2, Opeartion } = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter Fist Number:",
    },
    {
        name: "num2",
        type: "number",
        message: "Enter Second Number:",
    },
    {
        name: "Opeartion",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division"],
        message: "Enter Operation:",
    },
]);
if (Opeartion === "addition") {
    console.log(num1 + num2);
}
else if (Opeartion === "subtraction") {
    console.log(num1 - num2);
}
else if (Opeartion === "multiplicat") {
    console.log(num1 * num2);
}
else if (Opeartion === "division") {
    console.log(num1 / num2);
}
;
