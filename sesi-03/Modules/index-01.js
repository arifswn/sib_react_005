/*
    how to call class
    using : npm init -y
    add : "type": "module" > to pacakage.json
*/

import Employee from "./Employee.js"
const mark = new Employee("Mark Cubus")
console.log("call class Employee : "+mark.doWork())