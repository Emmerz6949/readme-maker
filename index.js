//requiring built in node packages
const fs = require("fs");
const util = require("util");
//requiring the inquirer package
const inquirer = require("inquirer");

//promisifying the fs writeFile function
const writeFileAsync = util.promisify(fs.writeFile);

//calling the function thats declared below this line
generateReadMe ();

async function generateReadMe() {
    try {
        //prompting the user with a series of questions
        const info = await inquirer.prompt([
        {
            message: "Please enter the title of your project:",
            name: "title"
        },
        {
            message: "Please enter a description for your project:",
            name: "description"
        },
        {
            message: "Please enter installation instructions:",
            name: "install"
        },
        {
            message: "Please enter usage information:",
            name: "usage"
        },
        {
            message: "Please enter contribution guidelines:",
            name: "contribute"
        },
        {
            message: "Please enter test instructions:",
            name: "test"
        },
        {
            message: "Please enter your GitHub username:",
            name: "hubName"
        },
        {
            message: "Please enter your email:",
            name: "email"
        },
        {
            type: "list",
            name: "license",
            message: "Please choose a licenese:",
            choices: ["Apache2.0", "MIT", "GPL", "None"]
        }
    ]);
    //logging out the received information
    console.log(info);

    //using object destructuring to access the received information as variable
    const {title, description, install, usage, contribute, test, hubName, email, license} = info;

    /*writes a professional readme using the provided information in a 
        file named userREADME.md (first run creates the file, subsequent runs overwrite it)*/
    await writeFileAsync("userREADME.md", 
`# ${title}  &nbsp;&nbsp;&nbsp; ![image](https://img.shields.io/badge/license-${license}-blueviolet)
    
## Description

${description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)


## Installation

${install}


## Usage

${usage}


## Contributing

${contribute}


## Tests

${test}


## Questions

If you have any questions feel free to reach out to me on my GitHub page or via e-mail!

${hubName}: https://github.com/${hubName}

E-mail: ${email}


## License

${license}
    `);
    }
    catch (err) {
        console.log(err);
    }
}
