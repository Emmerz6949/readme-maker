const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

generateReadMe ();

async function generateReadMe() {
    try {
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
            choices: ["Apache License 2.0", "MIT License", "None"]
        }
    ]);
    console.log(info);

    const {title, description, install, usage, contribute, test, hubName, email, license} = info;
    }
    catch (err) {
        console.log(err);
    }
}
