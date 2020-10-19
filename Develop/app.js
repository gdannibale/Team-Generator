const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
//const writeFile = require('./team.html')

let engineer = new Array();
let intern = new Array();
let manager = new Array();
let employeeArr = {manager, engineer, intern};

const OUTPUT_DIR = path.resolve(__dirname, "./Team Generator");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Prompt = require("inquirer/lib/prompts/base");

const askName = {
    type:'input',
    name: 'name',
    message: `What's your name?`,
    default: 'Anonymous',
};

new Prompt(askName)
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message:"What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type:'text',
            name: 'employee',
            message: "What is the Employee's name?"
        },
        {
            type:'text',
            name: 'id',
            message: "What is the employee's ID number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the employee's email?"
        }])
        .then(({employee, id, email, role}) => {
            if (role === "Manager") {
                return inquirer
                    .prompt([{
                        type:'text',
                        name: 'office',
                        message:"What is the Manager's office number?"
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "Would you like to add another employee?",
                        default: true
                    }])
                    .then(({office, anotherEntry}) => {
                        manager.push(new Manager(employee, id, email, office))
                        // console.log(employeeArr)
                        if (anotherEntry) {
                            return new Prompt(askName);
                        }
                    })
            } else if (role === "Engineer") {
                return inquirer
                    .prompt([
                        {
                        type: 'text',
                        name: 'github',
                        message: "What is the Engineer's Github username?"
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "Would you like to add another employee?",
                        default: true
                    }])
                    .then(({github, anotherEntry}) => {
                        engineer.push(new Engineer(employee, id, email, github))
                        // console.log(employeeArr)
                        if (anotherEntry) {
                            return new Prompt(askName);
                        }
                    })
            } else if (role === 'Intern') {
                 return inquirer
                    .prompt([{
                        type:'text',
                        name:'school',
                        message: "What is the Intern's school?"
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "Would you like to add another employee?",
                        default: true
                    }])
                    .then(({school, anotherEntry}) => {
                        intern.push(new Intern(employee, id, email, school))
                        // console.log(employeeArr)
                        if (anotherEntry) {
                            return new Prompt(askName);
                            
                        }
                    })
            }
            console.info("end");
        });



Prompt()
    .then(teamData => {
        return generatePage(employeeArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })

    writeFile = fileContent => {
        return new Promise((resolve, reject) => {
            fs.writeFile('index.html', fileContent, err => {
                if (err) {
                    reject(err);
    
                    return;
                }
    
                resolve({
                    ok: true,
                    message:'File created!'
                })
            })
        })
    };
    
    module.exports = writeFile

