#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Define the arrays to store student and course information.
const studentArray = [];
const coursesArray = [
    { Name: "Data Science", Fees: 5000 },
    { Name: "Big Data", Fees: 8000 },
    { Name: "Artificial Intelligence", Fees: 10000 },
    { Name: "Cloud Computing", Fees: 9000 },
    { Name: "Project Management", Fees: 8000 },
    { Name: "Business Intelligence", Fees: 7000 },
    { Name: "Networking", Fees: 7000 },
    { Name: "Software Development", Fees: 8000 },
];
// Function to generate a random student ID.
function generateID() {
    let id;
    do {
        id = Math.round(Math.random() * 100000);
    } while (studentArray.some((student) => student.Student_ID === id));
    return id;
}
// Sleep function to add delays.
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// Animated welcome message.
async function welcome() {
    console.clear();
    const rainbow = chalk.bold(chalk.bgCyanBright(" Welcome to Student Management System "));
    console.log(rainbow);
    await sleep(2000);
}
// Function to show the list of students.
function showStudentList() {
    console.clear();
    console.table(studentArray);
}
// Function to show the list of courses.
function showCourseList() {
    console.clear();
    console.table(coursesArray);
}
// Function to add a new student.
async function addStudent() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "Enter Student Name: ",
        },
    ]);
    const Id = generateID();
    const student = {
        Student_ID: Id,
        Student_Name: answers.Name,
        Enrolled_Courses: [],
        Course_status: "",
        Current_Balance: 0,
    };
    studentArray.push(student);
    console.log(chalk.greenBright(`Student Added Successfully!\nStudent ID: ${chalk.yellowBright(Id)}`));
}
// Function to enroll a student in a course.
async function enrollStudent() {
    showStudentList();
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "studentId",
            message: "Enter Student ID to Enroll: ",
        },
        {
            type: "list",
            name: "courseName",
            message: "Select Course:\n",
            choices: coursesArray.map((course) => course.Name),
        },
    ]);
    const student = studentArray.find((s) => s.Student_ID === answers.studentId);
    if (student) {
        student.Enrolled_Courses.push(answers.courseName);
        student.Course_status = "Not Paid";
        console.log(chalk.greenBright("Enrolled Successfully!"));
    }
    else {
        console.log("Please enter a valid Student ID.");
    }
}
// ... (continue with other functions as needed)
// Main function to start the application.
async function main() {
    await welcome();
    let flag = false;
    do {
        const answers = await inquirer.prompt([
            {
                type: "list",
                name: "operator",
                message: "Which Department do you belong to?\n",
                choices: ["Admin", "Finance", "Close"],
            },
        ]);
        if (answers.operator === "Admin") {
            showStudentList();
            const adminChoices = [
                "Add Student",
                "Enrollment",
                "Show Student List",
                "Show Course List",
                "Close",
            ];
            const adminAnswers = await inquirer.prompt([
                {
                    type: "list",
                    name: "adminOperator",
                    message: "What operation do you want to perform?\n",
                    choices: adminChoices,
                },
            ]);
            switch (adminAnswers.adminOperator) {
                case "Add Student":
                    await addStudent();
                    break;
                case "Enrollment":
                    await enrollStudent();
                    break;
                case "Show Student List":
                    showStudentList();
                    break;
                case "Show Course List":
                    showCourseList();
                    break;
                case "Close":
                    flag = true;
                    console.log(chalk.blueBright("Thanks for using Student Management System"));
                    break;
                default:
                    console.log("Invalid operation.");
            }
        }
        else if (answers.operator === "Finance") {
            // Implement the finance-related functionality here.
        }
        else if (answers.operator === "Close") {
            flag = true;
            console.log(chalk.blueBright("Thanks for using Student Management System"));
        }
    } while (!flag);
}
main();
// #!/usr/bin/env node
// import inquirer from "inquirer";
// import chalk from "chalk";
// import chalkanimation from "chalk-animation";
// import Choices from "inquirer/lib/objects/choices.js";
// import { table } from "console";
// let student_array = new Array();
// let Courses_array = new Array();
// let courses_name:string[] = ["Data Science","Big Data","Artificial Intelligence","Cloud Computing","Project Management","Business Intelligence","Networking","Software Development"];
// let courses_fees:number[] = [5000,8000,10000,9000,8000,7000,7000,8000];
// for (let j = 0; j < courses_name.length; j++) {
//   let cs = {
//     Name: courses_name[j],
//     Fees: courses_fees[j]
//   }  
//   Courses_array.push(cs);
// }
// let flag = false;
// type student = {
//     Student_ID: number;
//     Student_Name: string;
//     Enrolled_Courses: string[];
//     Course_status: string;
//     Current_Balance: number;
// };
// const sleep = ()=> {
//     return new Promise((resolve) => {
//         setTimeout(resolve, 1000);
//     })
// }
// async function Welcome() {
// let rainbow = chalkanimation.rainbow('Welcome to Student Management System'); // Animation starts
// await sleep();
// rainbow.stop();
// //console.log(chalk.yellowBright(chalk.bold("Developed By Mubashir Ahmed \n")));
// }
// async function ShowStudentList(){
//     console.clear();
//     //console.log(student_array[0].Student_ID);
//     let listing = new Array();
//     let student2;
//     for (let j = 0; j < student_array.length; j++) {
//       student2 = {
//         Student_ID: student_array[j].Student_ID,
//         Student_Name: student_array[j].Student_Name,
//         Enrolled_Courses: student_array[j].Enrolled_Courses
//       }  
//       listing.push(student2);
//     }
//     console.table(listing);
// }
// async function ViewBalance(){
//   console.clear();
//   console.table(student_array);
// }
// async function ShowCoursesList(){
//   console.clear();
//     //console.log(student_array[0].Student_ID);
//     let listing = new Array();
//     let student2;
//     for (let j = 0; j < student_array.length; j++) {
//       student2 = {
//         Student_Name: student_array[j].Student_Name,
//         Enrolled_Courses: student_array[j].Enrolled_Courses,
//         Course_status: student_array[j].Course_status
//       }  
//       listing.push(student2);
//     }
//     console.table(listing);
// }
// async function addstudent(){
//     await inquirer
//     .prompt([
//       {
//           type:"input",
//           name:"Name",
//           message:"Enter Student Name: "
//       }
//     ])
//     .then((answers) => {
//       let Id = GenerateID();
//       let student: student = {
//         Student_ID: Id,
//         Student_Name: answers.Name,
//         Enrolled_Courses: [],
//         Course_status: "",
//         Current_Balance: 0
//       }
//       student_array.push(student);
//       console.log(chalk.greenBright(`Student Added Successfully! \n Student ID: ${chalk.yellowBright(Id)}`));
//     });
// }
// function GenerateID() {
//   let Id:number = Math.round(Math.random() * 100000);
//   for (let i = 0; i < student_array.length; i++) {
//         if(Id == student_array[i].Student_ID){
//           GenerateID();
//         }
//   }
//   return Id;
// }
// async function Enroll(){
//     await ShowStudentList();
//     await inquirer
//     .prompt([
//       {
//           type:"number",
//           name:"studentid",
//           message:"Enter Student Id to Enroll: "
//       },
//       {
//         type:"list",
//         name:"operator",
//         message:"Select Course \n",
//         choices:courses_name
//     }
//     ])
//     .then((answers) => {
//         for (let index = 0; index < student_array.length; index++) {
//           if (answers.studentid == student_array[index].Student_ID) {
//             student_array[index].Enrolled_Courses.push(answers.operator);
//             student_array[index].Course_status = "Not Paid";
//             break;
//           }
//           else{
//             console.log("Please enter valid Student ID");
//           }
//         }
//     });
// console.log(chalk.greenBright("Enrolled Successfully!"));
// }
// async function ShowCourse() {
//   console.table(Courses_array);
// }
// async function Deletetask(){
//     await ShowStudentList();
//     await inquirer
//     .prompt([
//       {
//           type:"number",
//           name:"D_taskid",
//           message:"Enter Task Id to delete an entry: "
//       }
//     ])
//     .then((answers) => {
//         if(answers.D_taskid < student_array.length){
//           student_array.splice(answers.D_taskid,1);
//         }
//     });
// console.log(chalk.greenBright("Task Deleted Successfully!"));
// }
// async function main(){
//   await inquirer
//   .prompt([
//     /* Pass your questions in here */
//     {
//         type:"list",
//         name:"operator",
//         message:"Which Depart you belong? \n",
//         choices:["Admin","Finance","Close"]
//     }
//   ])
//   .then(async (answers) => {
//     if (answers.operator == "Admin") {
//       console.clear();
//       await ManageStudent();
//     }
//     else if (answers.operator == "Finance"){
//       console.clear();
//       await ManageFinance();
//     }
//     else if (answers.operator == "Close"){
//       console.clear();
//       flag = true;
//       console.log(chalk.blueBright("Thanks for using Student Management System"));
//       console.log(chalk.yellowBright(chalk.bold("Developed By Mubashir Ahmed \n")));
//   }
//   })
// }
// async function Debit (){
//   await ViewBalance();
//   await inquirer
// .prompt([
//   {
//       type:"number",
//       name:"id",
//       message:"Enter Student Id: "
//   },
//   {
//     type:"number",
//     name:"D_amount",
//     message:"Enter Amount To Debit: "
//   }
// ]).then((Result) => {
//   if (Result.D_amount > 0) {
//     for (let index = 0; index < student_array.length; index++) {
//       if (Result.id == student_array[index].Student_ID) {
//         student_array[index].Current_Balance = student_array[index].Current_Balance + Result.D_amount;
//         break;
//       }
//       else{
//         console.log("Please enter valid Student ID");
//       }
//     }
//   } 
//   else{
//       console.log("Incorrect amount");   
//   }
// })
// }
// async function Payment(SID:number,SFee:number) {
//     for (let index = 0; index < student_array.length; index++) {
//       if (SID == student_array[index].Student_ID) {
//         console.log(chalk.greenBright(`Available Balance: ${student_array[index].Current_Balance}`));
//         console.log(chalk.greenBright(`Total Fees: ${SFee}`));
//         if(student_array[index].Current_Balance >= SFee){
//           student_array[index].Current_Balance = student_array[index].Current_Balance - SFee;
//           student_array[index].Course_status = "Paid";
//           console.log(chalk.bold(chalk.cyanBright("Fees Paid Successfully!")));
//         }
//         else{
//           console.log("Insufficient Balance! Kindly debit the relevant amount first");
//         }
//       }
//     }
// }
// async function Pay() {
//   let TotalFee:number = 0;
//   await ViewBalance();
//   await inquirer
// .prompt([
//   {
//       type:"number",
//       name:"id",
//       message:"Enter Student Id: "
//   }
// ]).then(async (Result) => {
//     for (let index = 0; index < student_array.length; index++) {
//       if (Result.id == student_array[index].Student_ID) {
//         //console.log(chalk.greenBright(`Available Balance: ${student_array[index].Current_Balance}`));
//         for (let i = 0; i < student_array[index].Enrolled_Courses.length; i++) {
//           for (let j = 0; j < Courses_array.length; j++) {
//             if(student_array[index].Enrolled_Courses[i] == Courses_array[j].Name){
//               TotalFee = TotalFee + Courses_array[j].Fees;
//             }
//           }
//         }
//         await Payment(student_array[index].Student_ID,TotalFee);
//         break;
//       }
//       else{
//         console.log("Please enter valid Student ID");
//         await Pay();
//       }
//   } 
// })
// }
// async function ManageFinance(){
//   console.clear();
//   let check:boolean = false;
//   do{
//     await inquirer
//   .prompt([
//     /* Pass your questions in here */
//     {
//         type:"list",
//         name:"operator",
//         message:"Which operation you want to perform? \n",
//         choices:["View Balance","Debit Amount","Pay tuition fees","Show Courses List","Close"]
//     }
//   ])
//   .then(async (answers) => {
//     if (answers.operator == "View Balance") {
//         console.clear();
//         await ViewBalance();
//     } 
//     else if (answers.operator == "Debit Amount"){
//       console.clear();
//       await Debit();
//     }
//     else if (answers.operator == "Pay tuition fees"){
//       await Pay();
//     }
//     else if (answers.operator == "Show Courses List"){
//       console.clear();
//       await ShowCourse();
//     }
//     else if (answers.operator == "Close"){
//       console.clear();
//       check = true;
//     }
//   })
//   } while(check == false);
// }
// async function ManageStudent(){
//   console.clear();
//   let check:boolean = false;
//   do{
//     await inquirer
//   .prompt([
//     /* Pass your questions in here */
//     {
//         type:"list",
//         name:"operator",
//         message:"Which operation you want to perform? \n",
//         choices:["Add Student","Enrollment","Show Course status","Show Student List","Show Courses List","Close"]
//     }
//   ])
//   .then(async (answers) => {
//     if (answers.operator == "Add Student") {
//         console.clear();
//         await addstudent();
//     } 
//     else if (answers.operator == "Enrollment"){
//         console.clear();
//         await Enroll();
//     }
//     else if (answers.operator == "Show Course status"){
//         console.clear();
//         await ShowCoursesList();
//     }
//     else if (answers.operator == "Show Student List"){
//         console.clear();
//         await ShowStudentList();
//     }
//     else if (answers.operator == "Show Courses List"){
//       console.clear();
//       await ShowCourse();
//   }
//     else if (answers.operator == "Close"){
//       console.clear();
//       check = true;
//     }
//   })
//   } while(check == false);
// }
// async function startAgain () {
//     await Welcome();
//    do{
//     await main();
//    } while(flag == false);
// }
// startAgain();
