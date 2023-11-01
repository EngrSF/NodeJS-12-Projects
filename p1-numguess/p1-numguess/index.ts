#!/usr/bin/env node
import inquirer from 'inquirer';

type ansType = {
    userGuess: number
}
rng();
async function rng() {
    
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answers : ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess b/w 1 to 10: "
    }
])

const {userGuess} = answers;

console.log(userGuess, "userGuess", systemGeneratedNo, 'SYs')

if(userGuess === systemGeneratedNo){
    console.log("Correct Answer")
} else {
    console.log("Please try again")
    rng();
}
}
