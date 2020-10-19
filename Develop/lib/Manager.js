// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const questions = ["officeNumber"

];

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    
    // printInfo() {
    //     console.log(`This employee has ${this.name}`);
    //     console.log(`This employee has an ID of ${this.id}`);
    //     console.log(`This employee has a role of ${this.role}`);
    //     console.log(`This employee's email is ${this.email}`);
    //     console.log(`This employee's gitHub username is ${this.officeNumber}`);
    // }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return `Manager`
    }
}

module.exports = Manager;
