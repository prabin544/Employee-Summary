// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, id, email, role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role
    }
    getName(){
        console.log(`Employee name: ${this.name}`)
    }
    getid(){
        console.log(`Employee id: ${this.id}`)
    }
    getEmail(){
        console.log(`Employee Email: ${this.email}`)
    }
    getRole(){
        console.log(`Employee Role: ${this.role}`)
    }

}

module.exports = Employee;