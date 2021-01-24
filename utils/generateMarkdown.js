// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

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

${data.test}

## Questions

Contact me at ${data.email} or view my work at https://github.com/${data.username}.
  `;
  }
  
  module.exports = generateMarkdown;
  