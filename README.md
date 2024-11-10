Here's the markdown documentation, structured in a professional way, for the provided code:

---

# Node.js README Generator

A command-line application to generate a structured, professional `README.md` file for a project. This generator prompts users for project information and outputs a well-formatted README file based on their responses.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License Badge](#license-badge)
- [Questions](#questions)
- [Code Details](#code-details)

## Description

This application generates a `README.md` file using user input. It includes sections for project title, description, installation instructions, usage information, contribution guidelines, license information, and contact details. The generated README is formatted with a table of contents and license badges.

## Installation

Ensure you have Node.js installed. Then install dependencies by running:

```bash
npm install inquirer
```

## Usage

1. Run the application from the command line with:

    ```bash
    node index.js
    ```

2. Follow the prompts to enter your project details.

3. A `README.md` file will be generated in the same directory.

## License Badge

This project includes license badges for popular licenses. Select a license during the prompt, and a badge will be added to the top of the generated README.

Supported licenses:
- MIT
- GPLv3
- Apache
- BSD
- None

## Questions

If you have additional questions or feedback about this application, reach out to the project creator through their GitHub or email.

---

## Code Details

### Importing Required Packages

```javascript
const inquirer = require('inquirer');
const fs = require('fs');
```

### Array of Questions

The `questions` array defines prompts for user input and includes validation for each response:

```javascript
const questions = [
  { /* Questions for title, description, installation, etc. */ }
];
```

### Generating README Content

The `generateREADME` function dynamically creates the README content using template literals and includes a license badge based on the user’s selection.

```javascript
function generateREADME(data) {
  // Generates a markdown string based on user inputs
}
```

### Writing to a File

The `writeToFile` function writes the generated README content to a file, handling any errors in the process.

```javascript
function writeToFile(fileName, data) {
  // Writes the data to README.md
}
```

### Initializing the Application

The `init` function prompts the user for inputs and then generates and writes the README file.

```javascript
function init() {
  // Initializes app and handles responses
}
```

