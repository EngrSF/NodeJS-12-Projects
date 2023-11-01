#!/usr/bin/env node 
import inquirer from "inquirer";

interface AnsType {
  User_ID: number | string;
  Password: number | string;
  Q_1: number | string;
  Q_2: number | string;
  Q_3: number | string;
  Q_4: number | string;
  Q_5: number | string;
}

async function main() {
  const answer: AnsType = await inquirer.prompt([
    {
      type: "input",
      name: "User_ID",
      message: "Enter user ID",
    },
    {
      type: "password",
      name: "Password",
      message: "Enter your password",
    },
    {
      type: "list",
      name: "Q_1",
      choices: [1947, 1948, 1966, 1965],
      message: "Question 1: When did Pakistan come into being?",
    },
    {
      type: "list",
      name: "Q_2",
      choices: [1955, 1948, 1977, 1978],
      message: "Question 2: When did Quaid-e-Azam die?",
    },
    {
      type: "list",
      name: "Q_3",
      choices: [1938, 1910, 1876, 1915],
      message: "Question 3: When was Quaid-e-Azam born?",
    },
    {
      type: "list",
      name: "Q_4",
      choices: [1919, 1918, 1920, 1921],
      message: "Question 4: When did Quaid-e-Azam leave Congress?",
    },
    {
      type: "list",
      name: "Q_5",
      choices: [1906, 1913, 1920, 1907],
      message: "Question 5: When did Quaid-e-Azam join the Muslim League?",
    },
  ]);

  const { User_ID, Password, Q_1, Q_2, Q_3, Q_4, Q_5 } = answer;

  if (User_ID && Password) {
    console.log("Successful login\nGOOD LUCK");

    if (Q_1 === 1947) {
      console.log("Answer to Q-1 is Correct");
    }

    if (Q_2 === 1948) {
      console.log("Your answer to Q-2 is correct");
    }

    if (Q_3 === 1876) {
      console.log("Your answer to Q-3 is correct");
    }

    if (Q_4 === 1920) {
      console.log("Your answer to Q-4 is correct");
    }

    if (Q_5 === 1913) {
      console.log("Your answer to Q-5 is correct");
    }
  } else {
    console.log("Your User_ID and password are incorrect.");
  }

  const result = [Q_1, Q_2, Q_3, Q_4, Q_5];
  console.table(result);
}

main();
