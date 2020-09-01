// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee{
    constructor(officeNumber, role){
        this.officeNumber = officeNumber;
        this.role = role;
    }
    
    getRole(){
        console.log(`Employee Role: ${this.role}`)
    }

}

module.exports = Manager;
