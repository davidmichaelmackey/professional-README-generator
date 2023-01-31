// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "Project Title:"
  },
  {
    type: "input",
    name: "description",
    message: "Project Description:"
  },
  {
    type: "checkbox",
    name: "contents",
    message: "Table of Contents"
  },
  {
    type: "input",
    name: "installation",
    message: "Installation:"
  },
  {
    type: "input",
    name: "Usage",
    message: "Usage Information:"
  },
  {
    type: "list",
    name: "license",
    message: "License Type:",
    choices: ["MIT", "GPL", "Apache"]
  },
  {
    type: "input",
    name: "contributing",
    message: "Contributing:"
  },
  {
    type: "input",
    name: "tests",
    message: "Test:"
  },
  {
    type: "",
    name: "",
    message: ""
  },
  {
    type: "",
    name: "",
    message: ""
  },
  {
    type: "",
    name: "",
    message: ""
  },
  {
    type: "",
    name: "",
    message: ""
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
