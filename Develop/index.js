// packages required
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// array of questions which will be asked of user
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
            choices: ['MIT', 'Apache', 'GPL']
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

// function which uses fs to create the .md file
function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => 
            err ? console.log(err) : console.log('README created!')
        );
};

// function which initilizes question prompts then runs write to file function
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README1.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();

