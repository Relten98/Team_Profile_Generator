// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
let Employee = require("./Employee");

class Manager extends Employee {
  constructor(userName, id, email, officeNumber) {
    super(userName, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return this.Manager
  }

}