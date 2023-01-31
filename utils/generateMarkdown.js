// !==========================================|
// ! function to generate markdown for README |
// !==========================================|

function generateMarkdown(data) {
  let readme = `# <${data.title}>

## Description
${data.description}

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

${installation(data.installation)}

## Usage

${screenshot(data.screenshot)}

## Credits

:bust_in_silhouette: Creator: ${data.creator}
<br>
:email: Email: [${data.email}](mailto:${data.email})
<br>
:octocat: GitHub: [${data.github}](https://github.com/${data.github}/)
<br>
:briefcase: Linkedin: [${data.linkedin}](https://linkedin.com/in/${data.linkedin}/)
<br>

${collaborators(data.collaborators)}

[${data.resources}](${resources(data.resources)})

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

${builtWith(data.toolset)}

## Contributors

[Contributor Covenant](https://www.contributor-covenant.org/)

## Tests

${data.tests}

## Questions


`
  return readme;
}

// !===========================|
// ! function for installation |
// !===========================|

function installation(installation) {

  if (installation) {
    var commands = installation.split(",");
    commands.forEach((c, index) => commands[index] = commands[index].trim());
    return `## Installation

Follow these commands to run the command line application:  

    ${commands.join(`
    `)}`;
  }
  else
    return ``;
}

// !========================|
// ! function for resources |
// !========================|

function resources(resources) {

  if (resources) {
    var commands = resources.split(",");
    commands.forEach((c, index) => commands[index] = commands[index].trim());
    return `### Resources

    ${commands.join(`
    `)}`;
  }
  else
    return ``;
}

// !============================|
// ! function for collaborators |
// !============================|

function collaborators(collaborators) {

  if (collaborators) {
    var commands = collaborators.split(",");
    commands.forEach((c, index) => commands[index] = commands[index].trim());
    return `### Collaborators

    ${commands.join(`
    `)}`;
  }
  else
    return ``;
}

// !=====================|
// ! function for badges |
// !=====================|

function builtWith(tools) {
  if (tools) {
    tools = tools.split(",");
    let res = `### Built With

<p align="center">`;

    tools.forEach(tool => {
      res += `<img src="https://img.shields.io/badge/-${tool}-lightgrey?style=for-the-badge"  alt="${tool}" />
      `;
    });

    res += `
</p>`;

    return res;

  }
  else {
    return ``;
  }
}

// !=========================|
// ! function for screenshot |
// !=========================|

function screenshot(screenshot) {
  if (screenshot) {
    return `

  ![Usage](assets/images/${screenshot})

    `;
  } else {
    return ``;
  }
}
// !======================|
// ! function for license |
// !======================|

function license(license) {
  if (license) {
    let licenseBadges = [
      // '- free license',
      {
        href: "#",
        src: 'https://img.shields.io/badge/License-Free_License-yellow?style=for-the-badge',
        alt: 'Free License'
      },
      {
        href: "https://www.gnu.org/licenses/gpl-3.0",
        src: 'https://img.shields.io/badge/License-GPL-BD0100?style=for-the-badge',
        alt: 'General Public License'
      },
      {
        href: "https://www.apache.org/licenses/LICENSE-2.0",
        src: 'https://img.shields.io/badge/License-Apache-4543AA?style=for-the-badge',
        alt: 'Apache License'
      },
      {
        href: "https://opensource.org/licenses/MS-PL",
        src: 'https://img.shields.io/badge/License-MsPL-00A4EF?style=for-the-badge',
        alt: 'Microsoft Public License'
      },
      {
        href: "https://en.wikipedia.org/wiki/BSD_licenses",
        src: 'https://img.shields.io/badge/License-BSD-003262?style=for-the-badge',
        alt: 'Berkeley Software Distribution'
      },
      {
        href: "https://en.wikipedia.org/wiki/Common_Development_and_Distribution_License",
        src: 'https://img.shields.io/badge/License-CDDL-5F81A0?style=for-the-badge',
        alt: 'Common Development & Distribution License'
      },
      {
        href: "https://opensource.org/licenses/EPL-1.0)",
        src: 'https://img.shields.io/badge/License-EPL-E89940?style=for-the-badge',
        alt: 'Eclipse Public License'
      },
      {
        href: "https://opensource.org/licenses/MIT",
        src: 'https://img.shields.io/badge/License-MIT-A31F34?style=for-the-badge',
        alt: 'MIT License'
      },
      {
        href: "https://opensource.org/licenses/MPL-2.0",
        src: 'https://img.shields.io/badge/License-MPL-E66000?style=for-the-badge',
        alt: 'Mozilla Public License'
      },
      {
        href: "#",
        src: 'https://img.shields.io/badge/License-Other-lightgrey?style=for-the-badge',
        alt: 'Other License'
      }

    ];
    return `## License
<p align = "center">
  <a href="${licenseBadges[license].href}"><img src="${licenseBadges[license].src}" alt="${licenseBadges[license].alt}"/></a>
</p>`;
  }
}

// !================|
// ! module exports |
// !================|

module.exports = generateMarkdown;
