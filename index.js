// ! packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// ! array of questions for user input

const questions = [
  {
    type: "input",
    name: "title",
    message: "Project Title:"
  },
  {
    type: "input",
    name: "repository",
    message: "Repository Name:"
  },
  {
    type: "input",
    name: "description",
    message: "Project Description:"
  },
  {
    type: "checkbox",
    name: "sections",
    message: "Add Section(s):",
    choices: [
      new inquirer.Separator('{ Pick Section(s) }'),
      {name: 'Installation'},
      {name: 'Screenshot'},
      {name: 'License'},
    ]
  },
  {
    type: "input",
    name: "installation",
    message: "Installation:",
    when: (data) => (data.sections.indexOf("installation") >= 0)
  },
  {
    type: "input",
    name: "Usage",
    message: "Usage Information:",
    when: (data) => (data.sections.indexOf("screenshots") >= 0)
  },
  {
    type: "list",
    name: "license",
    message: "License Type:",
    choices: ["MIT", "Apache", "GPL"],
    when: (data) => (data.sections.indexOf("license") >= 0)
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

// ! function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    err ? console.log(err) : console.log("Created readme successfully");
  });
}

// ! function to initialize app

function init() {
  inquirer.prompt(questions).then(answers => {
    writeToFile("NewREADME.md", generateMarkdown(answers));
  });
}

// ! function call to initialize app

init();
