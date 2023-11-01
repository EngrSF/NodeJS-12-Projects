// OOP Intr Explained with a TypeScript Console Application
import inquirer from "inquirer";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addStudent(student) {
        this.students.push(student);
    }
    getStudents() {
        return this.students;
    }
}
const persons = new Person();
const programStart = async (persons) => {
    console.log("Welcome Guest");
    const ans = await inquirer.prompt({
        type: "list",
        message: "Who would you like to talk to",
        name: "select",
        choices: ["Yourself", "Student"],
    });
    if (ans.select === "Yourself") {
        console.log("Please go ahead; how can I help you");
    }
    else if (ans.select === "Student") {
        console.log("Please feel free to talk");
    }
};
programStart(persons);
