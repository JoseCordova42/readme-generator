const fs = require('fs');
const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown.js');
const generateMD = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the Title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please give a Description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "How can your project be Installed?",
        name: "installation"
    },
    {
        type: "input",
        message: "How is your project Used?",
        name: "usage"
    },
    {
        type: "list",
        message: "What License does your project have?",
        name: "license",
        choices: [
            "GNU GPLv3",
            "Mozilla Public License 2.0",
            "Apache 2.0",
            "MIT",
            "Boost Software License 1.0",
            "Unlicense"
        ]
    },
    {
        type: "input",
        message: "How to Contribute to your project.",
        name: "contribute"
    },
    {
        type: "input",
        message: "How to Test your project.",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success! Your README file has been generated!')
    );
}

// function to initialize program
function init() {
    console.log("Welcome to the README generator.\nPlease answer the following questions:")
    inquirer
        .prompt(questions)
        .then(data => {
            writeToFile("README.md", generateMD(data))
        });
}

// function call to initialize program
init();
