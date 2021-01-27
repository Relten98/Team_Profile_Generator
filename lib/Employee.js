// TODO: Write code to define and export the Employee class


class Employee {
    constructor(userName, id, email) {
    this.userName = userName;
    this.id = id;
    this.email = email;
    }  
    getId(){
        return this.id
    };
    getEmail(){
        return  this.email
      }
    };
    getRole(){
        return "Employee"
    };
};
 // Returns 'Employee'