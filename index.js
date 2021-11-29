const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const generateHTML = require("./src/template")

const teamMember = []
const idArray = []

function start() {

    function createManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the team manager name?',
            },

            {
                type: 'input',
                name: 'managerID',
                message: 'What is the team manager ID?',
            },

            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the team manager email?',
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: 'What is the team manager office number?',
            },
        ]) .then((answers) => {

            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice)
            teamMember.push(manager)
            idArray.push(answers.managerID)
            addMember()
        })
    }

    function addMember() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'memberChoice',
                message: 'What type of employee would you like to add next?',
                choices: ['Engineer', 'Intern', 'Exit'],
            },

        ]) .then((answers) => {

            switch(answers.memberChoice) {
                case 'Engineer': addEngineer() 
                break;

                case 'Intern': addIntern()
                break;

                default: createTeam()
            }
        })
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the engineer name?',
            },

            {
                type: 'input',
                name: 'engineerID',
                message: 'What is the engineer ID?',
            },

            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the engineer email?',
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the engineer github?',
            },
        ]) .then((answers) => {

            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub)
            teamMember.push(engineer)
            idArray.push(answers.engineerID)
            addMember()
        })
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the intern name?',
            },

            {
                type: 'input',
                name: 'internID',
                message: 'What is the intern ID?',
            },

            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the intern email?',
            },
            {
                type: 'input',
                name: 'internGithub',
                message: 'What is the intern school?',
            },
        ]) .then((answers) => {

            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internGithub)
            teamMember.push(intern)
            idArray.push(answers.internID)
            addMember()
        })
    }

    function createTeam() {
        console.log(teamMember)
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, generateHTML(teamMember), 'utf-8');
    }

    createManager()
}

start()