// TODO: Write code to define and export the Employee class
let fs = require("fs");
let fileContents = "";
let inquirer = require("inquirer");

const questions = ["name", "id", "email", "role"

];

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `${this.name}`;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return `${this.email}`;
    }
    getRole() {
        return `Employee`;

    }

}
    

module.exports = Employee;

