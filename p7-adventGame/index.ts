#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

// Game and player variables
const game = {
  running: true,
  enemyHealth: 0,
  enemy: "",
};

const player = {
  health: 100,
  maxHealth: 100,
  attackDamage: 50,
  numHealthPotions: 3,
  maxHealthPotions: 3,
  healthPotionHealAmount: 30,
  healthPotionDropChance: 50, // Percentage
};

const enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
const maxEnemyHealth = 75;
const enemyAttackDamage = 25;

console.log(chalk.green("Welcome to the Dungeon"));

const printSeparator = () => {
  console.log("-----------------------------------------------------------");
};

const printPlayerStatus = () => {
  console.log(`\tYour HP: ${player.health}`);
  console.log(`\t${game.enemy}'s HP: ${game.enemyHealth}`);
};

const printMainMenu = () => {
  console.log("\n\tWhat would you like to do?");
  console.log("\t1. Attack");
  console.log("\t2. Drink health potion");
  console.log("\t3. Run!");
};

const printOutcome = (outcomeMessage) => {
  console.log(outcomeMessage);
};

const getNumericInput = async (message) => {
  const input = await inquirer.prompt({
    type: "number",
    name: "value",
    message,
  });
  return input.value;
};

const GAME = async () => {
  while (game.running) {
    printSeparator();

    game.enemyHealth = Math.floor(Math.random() * maxEnemyHealth);
    game.enemy = enemies[Math.floor(Math.random() * enemies.length)];
    console.log(`\t# ${game.enemy} has appeared! #\n`);

    while (game.enemyHealth > 0 && player.health > 0) {
      printPlayerStatus();
      printMainMenu();

      const choice = await getNumericInput("Please select");

      switch (choice) {
        case 1:
          const damageDealt = Math.floor(Math.random() * player.attackDamage);
          const damageTaken = Math.floor(Math.random() * enemyAttackDamage);

          game.enemyHealth -= damageDealt;
          player.health -= damageTaken;

          console.log(`\t> You strike the ${game.enemy} for ${damageDealt} damage.`);
          console.log(`\t> You receive ${damageTaken} in retaliation!`);

          if (player.health < 1) {
            printOutcome("\t> You have taken too much damage, you are too weak to go on!");
          }
          break;
        case 2:
          if (player.numHealthPotions > 0) {
            player.health += player.healthPotionHealAmount;
            player.numHealthPotions--;

            if (player.health > player.maxHealth) {
              player.health = player.maxHealth;
            }

            printOutcome(
              `\t> You drink a health potion, healing yourself for ${player.healthPotionHealAmount}.` +
                `\n\t> You now have ${player.health} HP.` +
                `\n\t> You have ${player.numHealthPotions} health potions left.\n`
            );
          } else {
            printOutcome("\t> You have no health potions left! Defeat enemies for a chance to get one!\n");
          }
          break;
        case 3:
          printOutcome(`\tYou run away from the ${game.enemy}!`);
          game.running = false;
          break;
        default:
          printOutcome("\tInvalid command!");
          break;
      }

      if (player.health < 1) {
        printOutcome("You limp out of the dungeon, weak from battle.");
        break;
      }
    }

    if (game.running) {
      printSeparator();
      printOutcome(` # ${game.enemy} was defeated! # `);
      printOutcome(` # You have ${player.health} HP left. #`);

      if (Math.floor(Math.random() * 100) < player.healthPotionDropChance && player.numHealthPotions < player.maxHealthPotions) {
        player.numHealthPotions++;
        printOutcome(` # The ${game.enemy} dropped a health potion! # `);
        printOutcome(` # You now have ${player.numHealthPotions} health potion(s). #`);
      }

      printSeparator();
      printOutcome("What would you like to do now?");
      console.log("1. Continue fighting");
      console.log("2. Exit dungeon");

      const userInput = await getNumericInput("Please select");
      if (userInput === 1) {
        printOutcome("You continue on your adventure!");
      } else if (userInput === 2) {
        printOutcome("You exit the dungeon, successful from your adventures!");
        game.running = false;
      }
    }
  }

  
  console.log("\n" + chalk.bgMagenta(chalk.bold.bgBlue("#      THANKS FOR PLAYING!     #")) + "\n");
  
};

GAME();
