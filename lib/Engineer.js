    // TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
    let Employee = require("./Employee");

    class Engineer extends Employee  {
    /// Engineer Gaming
    constructor(userName, id, email, github) {
        super(userName, id, email);
        this.github = github
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

console.table(Engineer)