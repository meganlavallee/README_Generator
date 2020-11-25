# README_Generator

const inquirer = require('inquirer');

//It's done when the application asks the user, "What is your name?"

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {

            //It's done when the application asks the user, "What languages do you know?"

            type: 'languages',
            message: 'What languages do you know?',
            name: 'languages',
        },

        //It's done when the application asks the user, “What is your preferred method of communication?"
        
        {
            type: 'communication',
            message: 'what is your preferred method of communication?',
            name: 'confirm',
        },

        //It's done after I have written those responses to a file.
    ])
    .then((response) =>
        response.confirm === response.password
            ? console.log('Success!')
            : console.log('It works')
    );
