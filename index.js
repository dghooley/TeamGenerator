const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html")
const teamArray = [];

// questions for different teams members:

// Manager: 
const managerQuestions = [

    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter the name of the manager of this team, or your name if you are the manager of this team. '
    },

    {
        type: 'input',
        name: 'managerID',
        message: 'What is this managers ID number, enter your ID number if you are the manager of this team'
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is this managers Email adress, enter your email adress if you are the manager of this team'
    },

    {
        type: 'input',
        name: 'office',
        message: 'What is this managers office number? if you are the manager of this team, enter your office number'
    },
]

//Engineer: 
const engineerQuestions = [

    {
        type: 'input',
        name: 'engiName',
        message: 'Enter the name of this engineer'
    },

    {
        type: 'input',
        name: 'engiID',
        message: 'Enter the ID number for this engineer'
    },

    {
        type: 'input',
        name: 'engiEmail',
        message: 'Enter the email adress for this engineer'
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter this engineers GitHub user name'
    },
]

//Intern:
const internQuestions = [

    {
        type: 'input',
        name: 'internName',
        message: 'Enter the name of this intern'
    },

    {
        type: 'input',
        name: 'internID',
        message: 'Enter the ID number for this intern',
    },

    {
        type: 'input',
        name: 'internEmail',
        message: 'Enter the email adress for this intern'
    },

    {
        type: 'input',
        name: 'school',
        message: 'What school does this interen attend, if this intern is not currently attending a school enter "N/A" ',
    },
]

//this question will promt the user if they want to add another employee

const anotherOne = [
    {
        type: 'list',
        name: 'nextEmployee',
        message: 'Select the type of team member you would like to add next, if you are done select "Done" to generate your team ',
        choices: ['Engineer', 'Intern', 'Done']
    }
]
// end of questions 


//starting function - begins with manager because each team will always have a manager 
function init() {
        //starts with the manager function
        managerPromt();
}


//function that will promt the user to select the next type of employee they are adding 
function next() {
    inquirer.prompt(anotherOne).then((response) => {
        
        console.log(response);
        switch (response.nextEmployee) {
            case 'Engineer':
                engineerPromt();
                break;
            case 'Intern':
                internPromt();
                break;
            case 'Done':
                console.log('Creating your team!')
                makeTeam();
        }
    })
}
//function for the manager questions that will be called first when initiated
function managerPromt() {
    inquirer.prompt(managerQuestions).then((response) => {

        let name = response.managerName;
        let id = response.managerID;
        let email = response.managerEmail;
        let office = response.office;
        // creats an object for this manager 
        const manager = new Manager(name, id, email, office);
        //pushes the new manager object to the empty array to be used later 
        teamArray.push(manager);
        //this will call the next function which will promt the user to select the next type of employee they are adding 
        console.log(teamArray);

        next();
    })
}
//Function for Engineer promts
function engineerPromt() {
    inquirer.prompt(engineerQuestions).then((response) => {

        let name = response. engiName;
        let id = response.engiID;
        let email = response.engiEmail;
        let github = response.github;
        // creats an object for this manager 
        const engineer = new Engineer (name, id, email, github);

        teamArray.push(engineer);
        console.log(teamArray);
        //this will call the next function which will promt the user to select the next type of employee they are adding 
        next();
    })
}

//Function for Intern promts
function internPromt() {
    inquirer.prompt(internQuestions).then((response) => {

        let name = response. internName;
        let id = response.internID;
        let email = response.internEmail;
        let school = response.school;

        const intern = new Intern (name, id, email, school);

        teamArray.push(intern);
        console.log(teamArray);

        //this will call the next function which will promt the user to select the next type of employee they are adding 
        next();
    })
}

//function to make the file 
function makeTeam() {
fs.writeFile(outputPath, render(teamArray), function(err) {
if (err) { 
    return console.log(err)
}
})

}

//calls the initiating function 
init();


/*// Refractored -------------
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

function makeTeam() {
    fs.writeFile(outputPath, render(teamArray), function(err) {
        if (err) {
            return console.log(err)
        }
    })
}


Prompt()
    .then(teamData => {
        return generatePage(teamArray)
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