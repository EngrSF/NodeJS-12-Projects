// Proj-9 CountDown NODE.JS Project: Assignment-2

import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

async function solAwait() {

const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "please enter time duration in sec",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter valid number";
        } else if (input > 60) {
            return "second must be in 60";
        } else {
            return true;
        }
        
    },
});

let input:number=res.userInput;
startTime(input)
}

solAwait()

function startTime (val:number) {
    const intTime=new Date().setSeconds(new Date().getSeconds() + val)
    const intervalTime=new Date(intTime)
    setInterval(()=>{
        const currentTime= new Date()
        const timeDiff = differenceInSeconds(intervalTime,currentTime)
        if (timeDiff <= 0) {
            console.log("Time Expired")
            process.exit();
        }
        const min = Math.floor((timeDiff%(3600*24))/3600)
        const sec = Math.floor(timeDiff%60)
        console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`)

    },1000)
    
    }
    // ctrl+shif+delte to delete invalid entry
    
        
    
