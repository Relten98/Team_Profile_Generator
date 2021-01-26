// TODO: Write code to define and export the Employee class


class Employee {
    constructor(userName, id, email) {
    this.userName = userName;
    this.id = id;
    this.email = email;
    }
    getRole() {
    console.log(`Name: ${this.userName}`);  
    console.log(`ID: ${this.id}`);  
    console.log(`Email: ${this.email}`);  
    }
}   

const ben = new Employee("Ben", 122, "lolwhy@bobux.com");

function getName() {
    console.log("What is your name>")
}
  
/* getId()
   
 getEmail()
 */
   
ben.getRole(); // Returns 'Employee'