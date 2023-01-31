// ! function to generate markdown for README
function generateMarkdown(data) {
  let readme = `
  
  # <${data.title}>

  ## Description

  ${data.description}

  - What was your motivation?
  - Why did you build this project?
  - What problem does it solve?
  - What did you learn?

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
    - [Creator](#creator)
    - [Collaborators](#collaborators)
    - [Resources](#resources)
  - [License](#license)
  - [Features](#features)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Deployment](#deployment)

  ## Installation

  ${installation(data.installation)}

  ## Usage

  ![screenshot](assets/images/${screenshot(data.screenshot)}.png)

  ## Credits

  ### Creator

  - :: Creator: ${data.name}
  - :octocat: GitHub: [](https://github.com/${data.github})
  - :: Linkedin [](https://linkedin.com/in/${data.linkedin})

  ### Collaborators

  ### Resources

  ## License

  License Type

  ## Badges

  ![Languages](https://img.shields.io/github/languages/top/davidmichaelmackey/professional-readme-generator?color=%23f7df1e&label=JavaScript&logo=JavaScript&style=for-the-badge)
  <p align="center">
    <img src="https://img.shields.io/github/languages/count/${data.github}/${data.repository}?style=for-the-badge" alt="Languages" />
    <img src="https://img.shields.io/github/languages/top/${data.github}/${data.repository}?style=for-the-badge" alt="Top Language" />
    <img src="https://img.shields.io/github/languages/code-size/${data.github}/${data.repository}?style=for-the-badge" alt="Code Size" />
    <img src="https://img.shields.io/github/repo-size/${data.github}/${data.repository}?style=for-the-badge" alt="Repo Size" />   
    <img src="https://img.shields.io/tokei/lines/github/${data.github}/${data.repository}?style=for-the-badge" alt="Total Lines" />
    <img src="https://img.shields.io/github/package-json/dependency-version/${data.github}/${data.repository}/inquirer?style=for-the-badge" alt="Inquirer Version" />
    <img src="https://img.shields.io/github/last-commit/${data.github}/${data.repository}?style=for-the-badge" alt="Last Commit" />  
    <img src="https://img.shields.io/github/issues/${data.github}/${data.repository}?style=for-the-badge" alt="Issues" />  
    <img src="https://img.shields.io/github/followers/${data.github}?style=social" alt="Followers" />
  </p>

  ## Features

  - 

  ## How to Contribute

  [Contributor Covenant](https://www.contributor-covenant.org/)

  ## Tests

  ${data.tests}

  ## Deployment

  ${data.deployment}

  `
  return readme;
}

function installation(installation) {

  if (installation) {
    var commands = installation.split(",");
    commands.forEach((c, index) => commands[index] = commands[index].trim());
    return `
  ## Installation
  Follow these commands to run the command line application:  
      
    ${commands.join(`
    `)}`;
  }
  else
    return ``;
}

function builtWith(tools) {
  if (tools) {
    tools = tools.split(",");
    let res = `
  ### Built With
  </br>
  <p align="center">
  `;

    tools.forEach(tool => {
      res += `<img src="https://img.shields.io/badge/-${tool}-orange?style=for-the-badge"  alt="${tool}" />
      `;
    });

    res += `
  </p>
  `;

    return res;

  }
  else {
    return ``;
  }
}

module.exports = generateMarkdown;
