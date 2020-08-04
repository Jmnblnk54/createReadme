const inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
    {
      type: "input",
      message: "Please describe your project.",
      name: "description",
    },
    {
      type: "input",
      message: "What is the installation process?",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage?",
      name: "usage",
    },
    {
      type: "input",
      message: "License?",
      name: "license",
    },
    {
      type: "input",
      message: "Who were the contributors to this project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "Tests?",
      name: "tests",
    },
    {
      type: "input",
      message: "Questions?",
      name: "questions",
    },
  ])
  .then(function (response) {
    const fileLayout = 
    `#Title: 
    ${response.title}
    
    ##Description: 
    ${response.description}
    
    ##Table of Contents: 
    * [License](#license)
    * [Installation](#installation)
    * [Tests](#tests)
    * [Usage](#usage)
    * [Technology Used](#technology-used)
    * [Contributing](#contributing)
    * [Questions](#questions)
    * [Link](#link)
    
    ##Installation: 
    ${response.installation}
    
    ##Usage: 
    ${response.usage}
    
    ##License: 
    ${response.license}
    
    ##Contributing: 
    ${response.contributing}
    
    ##Tests: 
    ${response.tests}
    
    ##Questions: 
    ${response.questions}`

    fs.writeFile("README.md", fileLayout, function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("Success!");
    });
    console.log(response);
  });
