const Manager = require("./lib/manager");
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
                // fire off createEngineer function;
                break;
                case "Add Intern":
                    // fire off createIntern function;
                break;
                case "Add Manager":
                    createManager();
                break;
                case "Quit":
                    // fire off quit function()
                    break;
            }

        })
    }

    createManager()
}

init();