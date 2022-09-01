// step one
/*class Employee {
    doWork(){
        return 'complete!'
    }
}

let scott = new Employee()
console.log(scott.doWork())
*/

// step two
class Employee {
    constructor(name){ //constructor > definisi di awal
        this._name = name
    }
    doWork(){ //method/function
        return 'complete!'
    }
    getName(){ //deklarasi properties > return name yang di set di constructor
        return this._name
    }
}

let scott = new Employee("Scott Moss") //set name
console.log("Get Name : "+scott.getName()) //call name