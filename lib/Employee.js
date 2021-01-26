// TODO: Write code to define and export the Employee class


class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
    getRole() {
    console.log(`Name: ${this.name}`);  
    console.log(`ID: ${this.id}`);  
    console.log(`Email: ${this.email}`);  
    }
}   

const Employeename = new Employee("Ben", 122, "lolwhy@bobux.com");

function getName() {
    console.log("What is your name>")
    let name = input
}
  
/* getId()
   
 getEmail()
 */
   
Employeename.getRole(); // Returns 'Employee'