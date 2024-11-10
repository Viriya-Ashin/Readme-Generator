// Function that returns a license badge based on the license passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  const badges = {
    MIT: '![License](https://img.shields.io/badge/License-MIT-yellow.svg)',
    GPLv3: '![License](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    Apache: '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    BSD: '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
  };
  return badges[license] || '';
}

// Function that returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  const links = {
    MIT: 'https://opensource.org/licenses/MIT',
    GPLv3: 'https://www.gnu.org/licenses/gpl-3.0',
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    BSD: 'https://opensource.org/licenses/BSD-3-Clause'
  };
  return links[license] || '';
}

// Function that returns the license section of the README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `## License

This project is licensed under the ${license} license. For more information, please refer to the [license link](${renderLicenseLink(license)}).`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any additional questions, you can reach me through the following:

- GitHub: [@${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
`;
}

// Exporting the generateMarkdown function for use in other modules
module.exports = generateMarkdown;



// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;
