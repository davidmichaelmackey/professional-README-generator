// ! function to generate markdown for README
function generateMarkdown(data) {
  let readme = `# <${data.title}>

## Description

${data.description}
<br>
// ${data.motivation}
// ${data.why}
// ${data.solution}
// ${data.ilearned}

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

${screenshot(data.screenshot)}

## Credits

:bust_in_silhouette:  Creator: ${data.creator}
<br>
:email:  Email: [${data.email}](mailto:${data.email})
<br>
:octocat:  GitHub: [${data.github}](https://github.com/${data.github}/)
<br>
:briefcase:  Linkedin: [${data.linkedin}](https://linkedin.com/in/${data.linkedin}/)
<br>

### Collaborators
${data.collaborators}

### Resources
${data.resources}

## License

${license(data.license)}

## Badges

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

[Deployment Page](https://${data.github}.github.io/${data.repository})

  `
  return readme;
}

// ! function for installation

function installation(installation) {

  if (installation) {
    var commands = installation.split(",");
    commands.forEach((c, index) => commands[index] = commands[index].trim());
    return `

  Follow these commands to run the command line application:  
      
    ${commands.join(`
    `)}`;
  }
  else
    return ``;
}

// ! function for badges

// function builtWith(tools) {
//   if (tools) {
//     tools = tools.split(",");
//     let res = `
//   ### Built With
//   </br>
//   <p align="center">
//   `;

//     tools.forEach(tool => {
//       res += `<img src="https://img.shields.io/badge/-${tool}-orange?style=for-the-badge"  alt="${tool}" />
//       `;
//     });

//     res += `
//   </p>
//   `;

//     return res;

//   }
//   else {
//     return ``;
//   }
// }

// ! function for screenshot

function screenshot(screenshot) {
  if (screenshot) {
    return `

  ![Usage](assets/images/${screenshot})

    `;
  } else {
    return ``;
  }
}

// ! function for license

function license(license) {
  if (license) {
    let licenseBadges = [
      '- free license',
      {
        href: "#",
        src: 'https://img.shields.io/badge/-Free_License-orange?style=for-the-badge',
        alt: 'Free License'
      },
      {
        href: "https://www.gnu.org/licenses/gpl-3.0",
        src: 'https://img.shields.io/badge/License-GPLv3-blue?style=for-the-badge',
        alt: 'GNU General Public License'
      },
      {
        href: "https://opensource.org/licenses/MIT",
        src: 'https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge',
        alt: 'MIT License'
      },
      {
        href: "https://opensource.org/licenses/BSD-2-Clause",
        src: 'https://img.shields.io/badge/License-BSD%202--Clause-orange?style=for-the-badge',
        alt: 'BSD 2-Clause "Simplified" License'
      },
      {
        href: "https://www.boost.org/LICENSE_1_0.txt)",
        src: 'https://img.shields.io/badge/License-Boost%201.0-lightblue?style=for-the-badge',
        alt: 'Boost Software License 1.0 License'
      },
      {
        href: "http://creativecommons.org/publicdomain/zero/1.0/)",
        src: 'https://img.shields.io/badge/License-CC0%201.0-lightgrey?style=for-the-badge',
        alt: 'Creative Commons Zero v1.0 Universal License'
      },
      {
        href: "https://opensource.org/licenses/EPL-1.0)",
        src: 'https://img.shields.io/badge/License-EPL%201.0-red?style=for-the-badge',
        alt: 'Eclipse Public License'
      },
      {
        href: "https://opensource.org/licenses/MPL-2.0",
        src: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen?style=for-the-badge',
        alt: 'Mozilla Public License'
      },
      {
        href: "http://unlicense.org/",
        src: 'https://img.shields.io/badge/license-Unlicense-blue?style=for-the-badge',
        alt: 'The Unlicense License'
      },
      {
        href: "#",
        src: 'https://img.shields.io/badge/-Other_License-orange?style=for-the-badge',
        alt: 'Other License'
      }

    ];
    return `
    ## License

    </br>
    <p align="center">
        <a href='${licenseBadges[license].href}'><img src='${licenseBadges[license].src}'  alt='${licenseBadges[license].alt}' /></a>
    </p>

    `
  }
}

module.exports = generateMarkdown;
