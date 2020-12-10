const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      // Installation
      type: "input",
      message: "How do I install this project?",
      name: "installation",
    },
    {
      //Usage
      type: "usage",
      message: "What is the projects usage?",
      name: "usage",
    },

    //Credits
    {
      type: "communication",
      message: "Collaborators are listed here.",
      name: "credits",
    },

    {
      // License
      type: "input",
      message: "What is the licensing agreement?",
      name: "license",
    },
    {
      // Contact Info
      type: "input",
      message: "How Do I Reach You?",
      name: "contact",
    },
  ])
    .then((response) => {
      console.log(response);
      fs.writeFile('README.md', JSON.stringify(response), (err) =>
        err ? console.log(err) : console.log('Success!')
      );
    }
      //look at the mini project and follow that logic. Using util and passing the response through another function that makes it look like 'nicer' markdown and then you give it to the .then function
    );

 promptUser()
   .then((answers) => writeFileAsync('README.md', (answers)))
   .then(() => console.log('Successfully wrote to readme.md'))
   .catch((err) => console.error(err));
