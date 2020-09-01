// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(school){
        this.school = school;
    }
    getRole(){
        
    }
    
    getSchool(){
        console.log(`Employee Role: ${this.school}`)
    }

}

module.exports = Intern;
