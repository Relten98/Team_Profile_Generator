// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(userName, id, email, school) {
        super(userName, id, email)
        this.school = school;
    }
    getRole() {
        return this.Intern
    }
    getSchool();{
    return this.school;
}
    }

