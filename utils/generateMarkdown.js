// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

![${data.license}](https://img.shields.io/badge/License-${data.license.replace(/ /g, "%20")}-blue)

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribute](#contribute)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributions

${data.contribute}

## Tests

${data.tests}

## Questions

Contact me at ${data.email} or view my work on [github](https://github.com/${data.username}).
  `;
  }
  
  module.exports = generateMarkdown;
  