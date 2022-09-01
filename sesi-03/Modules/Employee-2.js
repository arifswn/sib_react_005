/*
    menggunakan multiple export jika kita melakukan export lebih dari satu modul.
*/

export class Person{
    constructor(name){
        this._name = name
    }
    getName(){
        return this._name
    }
}

export class Employee extends Person{
    doWork(){
        return "complete!"
    }
}
