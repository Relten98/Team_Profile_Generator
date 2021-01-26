// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee  {
    /// Engineer Gaming
    constructor(github) {
        super(userName, id, email);
        this.github = github
    }
    getRole() {
    console.log(`Name: ${this.userName}`);  
    console.log(`ID: ${this.id}`);  
    console.log(`Github: ${this.github}`);  
    console.log(`Email: ${this.email}`);  
    }
}

getGithub();

Engineer.getRole();