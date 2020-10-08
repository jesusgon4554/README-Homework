const fs = require("fs");
const inquirer = require("inquirer");
const util= require("util");

const writeFileAsync= util.promisify(fs.writeFile);

inquirer.prompt([
    //license
    {
        type:'input',
        message:'what licenses do you have?',
        name:'license',
    },

    //Title
    {
        type:"input",
        message:"Enter Your Project Title.",
        name:'title'
    },

    //Description
    {
        type:"input",
        message:"Enter a Description",
        name:'description'
    },

    //Table of Contents
    // {
    //     type:'checkbox',
    //     message:'what do you want to update on your ReadMe file?',
    //     name:'Readme Choices',
    //     choices:
    //     ['Table of Contents',
    //     'Installation',
    //     'usage',
    //     'Contribution',
    //     'test',
    //     'link',
    //     'contact']
    // },

    //Installation
    {
        type:'input',
        message:'What do you need to install for this program to work?',
        name:'installation'
    },

    //usage
    {
        type:'input',
        message:'Enter Your Usage Info',
        name:'usage'

    },

    //Contribution
    {
        type:'input' ,
        message:'Enter your contribution guidelines',
        name:'contribution'
    },

    //Test
    {
        type:'input' ,
        message:'enter your test instructions',
        name:'test'
    },

    //README Entitled Questions
    {
        type: 'input',
        message:'Enter your github username',
        name:"githubUsername"
    },
    
    {
        type: 'input',
        message:'Enter your github project name',
        name:"githubProjectName"
    },
    //Contact Info
    {
        type:'input' ,
        message:'Enter your email',
        name:'email',
    }

]).then(res => {
    // console.log(res)
    const {license, title, description, installation, usage, contribution, test, githubUsername,githubProjectName, email} =res;
    printREADME(license, title, description, installation, usage, contribution, test, githubUsername,githubProjectName, email);
});

function printREADME(license, title, description, installation, usage, contribution, test, githubUsername,githubProjectName, email){
    let readMe =`### ${license}
    
    ### [Title]
    ${title}
    
    ### [Description]
    ${description}
    
    ### [Table of Contents](#table of contents)
    [Installation](#installation)
    [Usage](#usage)
    [Contribution](#contribution)
    [Test](#test)
    [Link](#link)
    [Contact](#contact)
    
    ### Installation
    ${installation}
    
    ### Contribution
    ${contribution}
    
    ### Usage
    ${usage}
    
    ### Contribution
    ${contribution}
    
    ### Test
    ${test}
    
    ### README Entitled Questions
    Github.com/${githubUsername}/${githubProjectName}
    
    ### Contact Info
    ${email}`

    console.log(readMe);

    saveREADME(readMe);
}

async function saveREADME(readMe) {
    await writeFileAsync("./assets/README.MD", readMe, "utf8");
}