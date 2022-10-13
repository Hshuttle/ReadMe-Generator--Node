// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your github username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter the title of your application",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a description of your application",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter installation instructions for your application",
    name: "installation",
  },
  {
    type: "input",
    message: "Please enter usage information for your application",
    name: "usage",
  },
  {
    type: "input",
    message: "Please enter contribution guidelines for your application",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please enter test instructions for your application",
    name: "test-instruction",
  },
  {
    type: "list",
    message: "Please choose a license for your application",
    choices: [
      "MIT",
      "GPLv2",
      "Apache",
      "GPLv3",
      "BSD 3-clause",
      "Unlicensed",
      "Other",
    ],
    name: "license",
  },
];
inquirer.prompt(questions).then((answers) => {
  const FILENAME =
    answers.title.toLowerCase().split(" ").join("") + "_README.json";
  fs.writeFile(FILENAME, JSON.stringify(answers), (err) => {
    err ? console.error(err) : console.log("Successfully wrote to file");
  });
});

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
