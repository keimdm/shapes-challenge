// DEPENDENCIES
const fs = require("fs");
const inquirer = require('inquirer');
const { Shape, Circle, Square, Triangle } = require("./lib/shapes.js");

// DATA
const questions = [
    {
        type: 'input',
        message: 'What text would you like to add? (3 characters max)',
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
        message: 'What color should be used? (can use a keyword or hex code)',
        name: 'color',
    },
];

// FUNCTIONS
function writeToFile(shapeData) {
    fs.writeFile();
}

// USER INTERACTIONS
function init() {
    inquirer.prompt(questions).then((response) => {
        const { text, shape, color } = response;
        let newShape;
        switch (shape) {
            case "Circle":
                newShape = new Circle(text, color);
                break;
            case "Square":
                newShape = new Square(text, color);
                break;
            case "Triangle":
                newShape = new Triangle(text, color);
                break;
            default:
                newShape = new Circle(text, color);
                break;
        }
        writeToFile(newShape);
    });
}

// INITIALIZATIONS
init();