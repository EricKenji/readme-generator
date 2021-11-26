// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a description of the project'
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the installation instructions?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the usage instructions?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How does someone contribute to the project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What licenses does the project use?',
            choices: ['APM', 'Apache', 'GNU', 'MIT', 'Mozilla']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
        
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => 
            err ? console.log(err) : console.log('README created!')
        );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README1.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();

