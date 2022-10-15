// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

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
    name: "testinstruction",
  },
  {
    type: "list",
    message: "Please choose a license for your application",
    choices: [
      "MIT",
      "GPLv2",
      "Apache 2.0",
      "GPLv3",
      "BSD 3-clause",
      "Unlicensed",
      "Other",
    ],
    name: "license",
  },
];
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    fs.writeFileSync(
      path.join(__dirname, "/dist/", "README.md"),
      generateMarkdown(answers)
    );
  });
}
// Function call to initialize app
init();
