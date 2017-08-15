function ready() {
    var tbodyCtrl = document.getElementById('employees');
    let employees: Employee[] = [
        new Employee("1max", "Kim", new Date(), "kim@gmail.com", "student", true, 70000),
        new Employee("2", "Long", new Date(), "long@gmail.com", "CEO", true, 1000000),
        new Employee("3", "Elisha", new Date(), "elisha@gmail.com", "CEO", true, 1000000),
        new Employee("4", "Phuc", new Date(), "phuc@gmail.com", "CEO", true, 1000000),
        new Employee("5", "Eric", new Date(), "eric@gmail.com", "CEO", true, 1000000),
    ];
    // let employees: Employee[] = [];
    // let kim = new Employee("1", "Kim", new Date(), "kim@gmail.com", "student", true, 70000)
    // employees.push(kim);
    console.log(employees);

    for(let idx=0; idx<employees.length;idx++) {
      let employee = employees[idx];
      let trData = '<tr>';
      trData += '<td>' + employee.id + '</td>';
      trData += '<td>' + employee.name + '</td>';
      trData += '<td>' + employee.dateOfHire.toDateString() + '</td>';
      trData += '<td>' + employee.email + '</td>';
      trData += '<td>' + employee.job + '</td>';
      trData += '<td>' + employee.active + '</td>';
      trData += '<td>$' + Number(employee.salary.toFixed(2)).toLocaleString() + '</td>';
      trData += '</tr>';
      tbodyCtrl.innerHTML += trData;
    }
};
class Employee {
    //properties
    id: string;
    name: string;
    dateOfHire: Date;
    email: string;
    job: string;
    active: boolean;
    salary: number;
    //constructor
    constructor(id: string, name: string, dateOfHire: Date, email: string, job: string, active: boolean, salary: number) {
        this.id=id;
        this.name=name;
        this.dateOfHire=dateOfHire;
        this.email=email;
        this.job=job;
        this.active=active;
        this.salary=salary;
    }
    //functions
}
