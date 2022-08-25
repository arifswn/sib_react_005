// Arrow function and bind(this)
// keuntungan menggunakan arrow function. 
// Yang pertama adalah sintaks yang lebih singkat,
// implicit return dan 
// manajemen this yang lebih bisa diprediksi.


// function declaration
// Function declarations dapat ditaruh di mana saja di dalam script
console.log("sebelum function declaration : "+addDec(2,5))
function addDec (a, b) {
    return a + b;
}
console.log("sesudah function declartaion : "+addDec(2, 5))


// function expression
// Function expressions adalah fungsi yang disimpan ke dalam suatu variable
// console.log("sebelum function expression : "+addExp(2, 5))
//akan terjadi error >  Cannot access 'addExp' before initialization
const addExp = function (a, b) {
    return a + b;
}
console.log("sesudah function expression : "+addExp(2, 5))

/* --------------------------------------- */
// cek perbedaan
// Function declarations dapat ditaruh di mana saja di dalam script. 
// Karena Javascript Interpreter yang ada di dalam browser membaca script sebelum menjalakan apapun,
//  lalu menyimpannya ke dalam memory. 

// Jadi kita dapat memanggil fungsi declaration 
// bahkan sebelum fungsi declaration tersebut dideklarasikan 
// seperti contoh di atas.

// arrow function
const addArrow = (a, b) => {
    return a + b;
}
console.log("arrow function : "+addArrow(2, 5))

// Implicit Return
const add = (a, b) => a + b;
const square = x => x * x;
const three = () => 3;

console.log("implicit return add : "+add(1, 2));
console.log("implicit return square : "+square(2));
console.log("implicit return three : "+three());

// mengembangkan arrow function tersebut menjadi komplek
// dengan menggunakan {} dan return yang eksplisit.
const cekArrow = (a, b) => {
    const temp = a + b;
    return temp;
}
console.log("mengembangkan arrow function : "+cekArrow(3,5))

// Manajemen this Keyword
function Person() {
    this.age = 0;

    setInterval(function() {
        this.age++;
        console.log(this.age);
    }, 1000);
    // perhatikan kode diatas
    //  akan mendapatkan NaN di cetak berulang-ulang.
    // Karena this yang ada didalam anonymous
    //  function yang ada di setInterval 
    // tidak lagi mengenal this dan this.age
}

// Bug ini bisa kita perbaiki dengan tiga cara 
// cara pertama this kita simpan ke variable lain. 
function Person() {
    this.age = 0;

    const that = this;
    setInterval(function() {
        this.age++;
        console.log("menggunakan variabel : "+that.age);
    }.bind(this), 1000);
}

// cara kedua menggunakan bind
function Person() {
    this.age = 0;
    setInterval(function() {
        this.age++;
        console.log("menggunakan bind : "+this.age);
    }.bind(this), 1000);
}

// cara ketiga tidak menggunakan kunci function di depannya
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log("tidak menggunakan kunci function di depannya : "+this.age);
    }, 1000);
}

const p = new Person();