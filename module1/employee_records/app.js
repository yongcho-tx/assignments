
let employees = [];

function Employee (name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
  
}

Employee.prototype.printEmployeeForm = function() {
        console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`);
}


    let bob = new Employee('Bob', 'Instructor', '$50/hr');
    let todd = new Employee('Todd', 'Student', '$10/hr');
    let jen = new Employee('Jen', 'TA', '$30/hr', 'Part Time');

bob.printEmployeeForm();
todd.printEmployeeForm();
jen.printEmployeeForm();

employees.push(bob, todd, jen);

console.log(employees)