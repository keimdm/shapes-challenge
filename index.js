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
        type: 'input',
        message: 'What color should be used for the text? (can use a keyword or hex code)',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'What shape should be used?',
        choices: ['Circle', 'Square', 'Triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What color should be used for the shape? (can use a keyword or hex code)',
        name: 'color',
    },
];

// FUNCTIONS
// inserts render function output from input shape into svg file framework to generate logo
function writeToFile(shape) {
    const svgText = `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

    ${shape.render()}

    </svg>
    `;
    // writes logo to svg file
    fs.writeFile("./examples/logo.svg", svgText, (err) => err ? console.log("Error: Failed to generate logo.svg") : console.log("Generated logo.svg"));
}

// USER INTERACTIONS
// iterates through questions and processes responses
function init() {
    inquirer.prompt(questions).then((response) => {
        const { text, textColor, shape, color } = response;
        // throws an error if more than 3 characters are entered
        if (text.length > 3) {
            console.log("Error: Only 3 characters can be displayed - please try again");
            return new Error("Error: Only 3 characters can be displayed - please try again");
        }
        else {
            // sets up shape to be whatever was selected by user
            let newShape;
            switch (shape) {
                case "Circle":
                    newShape = new Circle(text, textColor, color);
                    break;
                case "Square":
                    newShape = new Square(text, textColor, color);
                    break;
                case "Triangle":
                    newShape = new Triangle(text, textColor, color);
                    break;
                default:
                    newShape = new Circle(text, textColor, color);
                    break;
            }
            // passes to file writer function
            writeToFile(newShape);
        }
    });
}

// INITIALIZATIONS
init();