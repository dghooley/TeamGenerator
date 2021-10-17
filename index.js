const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template')
const writeFile = ('./src/generate-site')

let manager = [];
let engineer = [];
let intern = [];
let teamArray = [manager, engineer, intern];

// Refractored -------------
function Prompt () {

    return inquirer
    .prompt([
        {
            type:'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type:'text',
            name: 'employee',
            message: "What is the employee's name?"
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the employee's email?"
        }
    ])
    .then(({employee, id, email, role}) => {
        if (role === "Manager") {
            return inquirer
            .prompt ([{
                type: 'text',
                name: 'office',
                message: "What is the Manager's office number?"
            },
            {
                type:'confirm',
                name:'anotherEntry',
                message: "Would you like to add another employee?",
                default: false
            }])
            .then(({office, anotherEntry}) => {
                manager.push(new Manager(employee, id, email, office))
                if(anotherEntry) {
                    return Prompt();
                }
            })
        } else if (role === "Engineer") {
            return inquirer
            .prompt([{
                type:'text',
                name: 'github',
                message: "What is the Engineer's GitHub username?"
            },
            {
                type:'confirm',
                name: 'anotherEntry',
                message: "Would you like to add another employee?",
                default: false 
            }])
            .then(({github, anotherEntry}) => {
                engineer.push(new Engineer(employee, id, email, github))
                if (anotherEntry) {
                    return Prompt();
                }
            })
        } else if (role === 'Intern') {
            return inquirer
            .prompt([{
                type:'text',
                name:'school',
                message:"What is the Intern's school?"
            },
            {
                type:'confirm',
                name:'anotherEntry',
                message:"Would you like to add another employee?",
                default: false
            }])
            .then(({school, anotherEntry}) => {
                intern.push(new Intern(employee, id, email, school))
                if (anotherEntry) {
                    return prompt();
                }
            })
        }
    })
}

Prompt()
    .then(teamData => {
        return generatePage(employeeArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })

// Original code ---------------    
/*function init(){

    function createManager(){
        inquirer.prompt([
            {
                type:"input",
                name: "managerName",
                message: "What is the team manager's name?"
            },
            {
                type:"input",
                name: "managerId",
                message: "What is the team manager's ID?"
            },
            {
                type:"input",
                name: "managerEmail",
                message: "What is the team manager's email?"
            },
            {
                type:"input",
                name: "managerOfficeNumber",
                message: "What is the team manager's office number?"
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
                name: "engineerGithub",
                message: "What is the team engineer's GitHub address?"
            },
        ]).then(answers =>{
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
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
                name: "internSchool",
                message: "What is the team intern's school?"
            },
        ]).then(answers =>{
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
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

/*const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Team Profile Generated! Check out index.html to see your team profile!')
        }
    })
};
function createManager() {
    fs.writeFileSync(outputPath, render(createManager), "utf-8")
}
*/