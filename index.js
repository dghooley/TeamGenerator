const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer")
const teamArray = [];
function init(){

    function createManager(){
        inquirer.prompt([
            {
                type:"input",
                name: "managerName",
                message: "What is the team manger's name?"
            },
            {
                type:"input",
                name: "managerId",
                message: "What is the team manger's ID?"
            },
            {
                type:"input",
                name: "managerEmail",
                message: "What is the team manger's email?"
            },
            {
                type:"input",
                name: "managerOfficeNumber",
                message: "What is the team manger's office number?"
            },
        ]).then(answers =>{
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
            teamArray.push(manager);
            console.log(teamArray)
            mainMenu();
        })
    }
    
    function createEngineer(){
        inquirer.prompt([
            {
                type:"input",
                name: "engineerName",
                message: "What is the team engineer's name?"
            },
            {
                type:"input",
                name: "engineerId",
                message: "What is the team engineer's ID?"
            },
            {
                type:"input",
                name: "engineerEmail",
                message: "What is the team engineer's email?"
            },
            {
                type:"input",
                name: "engineerOfficeNumber",
                message: "What is the team manger's office number?"
            },
            {
                type:"input",
                name: "engineerGithub",
                message: "What is the team engineer's GitHub address?"
            },
        ]).then(answers =>{
            const engineer = new Manager(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerOfficeNumber, answers.engineerGithub)
            teamArray.push(engineer);
            console.log(teamArray)
            mainMenu();
        })
    }

    function createIntern(){
        inquirer.prompt([
            {
                type:"input",
                name: "internName",
                message: "What is the team intern's name?"
            },
            {
                type:"input",
                name: "internId",
                message: "What is the team intern's ID?"
            },
            {
                type:"input",
                name: "internEmail",
                message: "What is the team intern's email?"
            },
            {
                type:"input",
                name: "internOfficeNumber",
                message: "What is the team intern's office number?"
            },
            {
                type:"input",
                name: "internSchool",
                message: "What is the team intern's school?"
            },
        ]).then(answers =>{
            const engineer = new Manager(answers.internName, answers.internId, answers.internEmail, answers.internOfficeNumber, answers.internSchool)
            teamArray.push(intern);
            console.log(teamArray)
            mainMenu();
        })
    }

    function mainMenu(){
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What would you like to do next?",
                choices: ["Add Engineer", "Add Intern", "Add Manager", "Quit"]
            }
        ]).then(answer =>{
            switch(answer.memberChoice){
                case "Add Engineer":
                    createEngineer();
                break;
                case "Add Intern":
                    createIntern();
                break;
                case "Add Manager":
                    createManager();
                break;
                case "Quit":
                    createQuit();
                    break;
            }

        })
    }

    createManager()
}

init();