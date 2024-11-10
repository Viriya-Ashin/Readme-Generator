// Importing required packages for the application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: (input) => input ? true : 'Project title is required.'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
    validate: (input) => input ? true : 'Description is required.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
    validate: (input) => input ? true : 'Installation instructions are required.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
    validate: (input) => input ? true : 'Usage information is required.'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
    validate: (input) => input ? true : 'Contribution guidelines are required.'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
    validate: (input) => input ? true : 'Test instructions are required.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache', 'BSD', 'None']
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
    validate: (input) => input ? true : 'GitHub username is required.'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    validate: (input) => input ? true : 'Email address is required.'
  }
];

// Function to generate README content based on user input
function generateREADME(data) {
  const licenseBadge = {
    MIT: '![License](https://img.shields.io/badge/License-MIT-yellow.svg)',
    GPLv3: '![License](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    Apache: '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    BSD: '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)',
    None: ''
  };
  
  return `# ${data.title}

${licenseBadge[data.license]}

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

## License
This project is licensed under the ${data.license} license.

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

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log(`${fileName} has been successfully generated!`);
    }
  });
}

// Function to initialize the app and prompt user for inputs
function init() {
  inquirer.prompt(questions)
    .then((responses) => {
      const readmeContent = generateREADME(responses);
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('Error during initialization:', error);
    });
}

// Function call to initialize app
init();


// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
