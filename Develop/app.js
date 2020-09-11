const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { getMaxListeners } = require("process");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function promptUser(){
    return inquirer.prompt([
        {
            type: "list",
            choices: ["Manager", "Engineer", "Intern"],
            name: "role",
        },
        {
            type: "input",
            name: "name",
            Message: "Please enter your first name: "
        },
        {
            type: "input",
            name: "email",
            Message: "Please enter your Email: "
        },
        {
            type: "input",
            name: "id",
            Message: "Please enter your ID: "
        }, 
                
    ]);
};
function promptManager(){
    return inquirer.prompt([
        {
            type: "input",
            name: "officeNumber",
            Message: "Please enter your officeNumber: "
        },
          
    ]);
};

function promptEngineer(){
    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            Message: "Please enter your github: "
        },
        
    ]);
};
function promptIntern(){
    return inquirer.prompt([
        {
            type: "input",
            name: "school",
            Message: "Please enter your school: "
        },
        
    ]);
};

function addMember(){
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'again',
            message: 'Enter another member? ',
            default: true
        }
     ]);
};

async function init(){
    try{
        const Employees = [];
        var answer = true;
        while (answer){
            Employees.push(await getEmployee());
            const answeradd = await addMember();
            answer = answeradd.again;
            //console.log(answer);
        }
        //console.log(Employees);
        const temphtml = render(Employees);
        fs.writeFileSync(outputPath, temphtml);
    }
    catch(err){
        console.log(err);
    }
    
    
}
async function getEmployee () {
    const answers = await promptUser();
    if (answers.role === "Manager"){
        const managerAnswers = await promptManager();
        const manager = new Manager(answers.name, answers.id, answers.email, managerAnswers.officeNumber)
        //console.log(manager)
        return manager;
        
    }
    if (answers.role === "Engineer"){
        const engineerAnswers = await promptEngineer();
        const engineer = new Engineer(answers.name, answers.id, answers.email, engineerAnswers.github)
        return engineer;
        
    }
    if (answers.role === "Intern"){
        const internAnswers = await promptIntern();
        const intern = new Intern(answers.name, answers.id, answers.email, internAnswers.school)
        return intern;
       
    }
    
}
init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

