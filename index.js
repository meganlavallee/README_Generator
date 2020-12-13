const inquirer = require("inquirer");
const fs = require('fs');
// const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

// Questions for Read Me File
const questions = [
  {
    message: "What is the project title?",
    name: "title",
  },
  {
    message: "Describe your project",
    name: "description"
  },
  {
    message: "How do I install this project?",
    name: "installation",
  },
  {
    message: "What is the projects usage?",
    name: "usage",
  },
  {
    message: "Collaborators are listed here.",
    name: "credits",
  },
  {
    message: "What is the licensing agreement?",
    name: "license",
  },
  {
    message: "What's your github username?",
    name: "username",
  },
  {
    message: "What's your email address?",
    name: "email",
  },
];

// Write Read Me File
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, () => {
    console.log("written to file");
  });
};

// Export
function init (questions) {
  inquirer.prompt(questions).then((answsers) => {
    console.log(answers);
    const readMe = generateMarkdown(answers);
    console.log(readMe);
    writeToFile("README.md", readMe);
  });
}

// Getting Program Going
init(questions);