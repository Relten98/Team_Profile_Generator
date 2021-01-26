// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee  {
    constructor(school) {
        super (userName, id, email)
        this.school = school;
    }
    getRole() {
        console.log(`Name: ${this.userName}`);  
        console.log(`ID: ${this.id}`);  
        console.log(`School: ${this.school}`);  
        console.log(`Email: ${this.email}`);  
    }
}

getSchool();

Intern.getRole();