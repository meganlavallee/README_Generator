const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// const promptUser = require('./questions');
// const { prompt } = require("inquirer");
// const writeFileAsync = util.promisify(fs.writeFile);

// Array
const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      message: "What is the project title?",
      name: "title",
    },
    {
      type: 'input',
      message: "Describe your project",
      name: "description"
    },
    {
      type: 'input',
      message: "How do I install this project?",
      name: "installation",
    },
    {
      type: 'input',
      message: "What is the projects usage?",
      name: "usage",
    },
    {
      type: 'input',
      message: "Collaborators are listed here.",
      name: "credits",
    },
    {
      type: 'input',
      message: "What is the licensing agreement?",
      name: "license",
    },
    {
      type: 'input',
      message: "What's your github username?",
      name: "username",
    },
    {
      type: 'input',
      message: "What's your email address?",
      name: "email",
    },
  ])


promptUser()
  .then((answers) => ('README.md', (answers)))
  .then(() => console.log('Running through this point'))
  .catch((err) => console.error(err));



// Write README file
// function writeToFile(fileName, data) {


// Function to Initialize Program
// function init() 


// Function to Call Program
// init();