// DEPENDENCIES
const fs = require("fs");
const inquirer = require('inquirer');

// DATA
const questions = [
    {
        type: 'input',
        message: 'What text would you like to add?',
        name: 'text',
    },
    {
        type: 'list',
        message: 'What shape should be used?',
        choices: ['Circle', 'Square', 'Triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What color should be used?',
        name: 'color',
    },
];

// FUNCTIONS
function writeToFile() {
    fs.writeFile();
}

// USER INTERACTIONS
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile();
    });
}

// INITIALIZATIONS
init();