class Person{
    constructor(name){
        this._name = name
    }
    getName(){
        return this._name
    }
}

//class Employee di definisikan sebagai turunan dari Person
//secara otomatis diwariskan kepada Employee
class Employee extends Person{
    //tanpa kita deklarasi method dan properties name, 
    // instance dari class Employee bisa digunakan

    //tambah fungsi khusus yang akan berjalan di class Employee saja
    doWork(){
        return this._name + " is working"
    }

}

let scott = new Employee("Scott Moss") //set name
console.log(scott.getName()) //get name
console.log(scott.doWork()) //get function di class Employee saja
