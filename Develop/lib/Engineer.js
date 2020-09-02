// // TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(GitHubUser){
        super (GitHubUser);
        this.GitHubUser = GitHubUser;
//         this.role = role;
     }
//     getGithub(){
//         console.log(`Employee Gthub Username : ${this.github}`)
//     }
//     getRole(){
//         console.log(`Employee Role: ${this.role}`)
//     }

 }

 module.exports = Engineer;
