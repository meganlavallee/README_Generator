const questions = require("inquirer");
var fs = require("fs");

questions
  .prompt([
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
  .then((response) =>
    response.confirm === response.password
      ? console.log("Success!")
      : console.log("It works")
  );

fs.writeFile('README.md', 'Project Read Me', function(err){
  if (err) {
    return console.error(err);
  }
  console.log("data written")
  
})