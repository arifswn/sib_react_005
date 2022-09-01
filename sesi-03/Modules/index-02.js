/*
    how to call class
    using : npm init -y
    add : "type": "module" > to pacakage.json

    melakukan import dengan menggunakan destructuring object yang sudah kita pelajari bersama-sama
*/

import {Person, Employee} from "./Employee-2.js"
const mark = new Employee("Mark Cubus")
console.log("call class Employee doWork : "+mark.doWork())
console.log("call class Employee getName : "+mark.getName())