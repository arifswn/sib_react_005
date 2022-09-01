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

    constructor(name, title){
        //name? punya syp : cara panggil
        super(name) 
        //dengan menggunakan super, kita bisa menghubungkan/mengakses leluhur dari class Employee.
        //yaitu class Person
        //bagaimana panggilnya ?
        this._title = title
    }

    //tambah fungsi untuk call construct data di class Employee
    doTitle(){
        return "Hello, "+this._title + " " +this._name+ ". Selamat Malam.."
    }
}

let scott = new Employee("Scott Moss") //set name
console.log(scott.getName()) //get name
console.log(scott.doWork()) //get function di class Employee saja

// coba kita panggil di class Person
// const rendy = new Person("Rendy")
// console.log(rendy.doWork()) //is not a function/undefined

// apa itu method super > mengakses parent class. 
// biasanya dipakai untuk mengakses method yang tertimpa (overridden)
// atau constructor milik parent class
let scottConstructor = new Employee("Arif", "Tuan")
console.log(scottConstructor.doTitle())


/*
    modul sesi 3
    di modul ini kita sudah belajar tentang sintaks class yang diperkenalkan ES6 
    untuk memudahkan kita bekerja dengan kode yang bersifat object oriented.
    
    belajar mendefinisikan class, membuat instance dari sebuah class. 
    belajar membuat method dan juga belajar tentang constructor,
    serta belajar cara mendefinisikan properties yang digunakan oleh class.

    belajar tentang hubungan parent-child antar class,
    sehingga kita bisa menurunkan sebuah class dan 
    menambahkan fungsi terhadap class turunan tersebut 
    menggunakan sintaks extends dan juga super.
*/