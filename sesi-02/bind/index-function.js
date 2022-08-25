// A bit functional side of JavaScript
// tiga method yang menerapkan konsep functional programming: 
// map, filter dan reduce. 

// bahas tentang konsep higher-order function di dalam lingkup JavaScript
//  yang merupakan salah satu konsep terpenting dalam functional programming

// konsep Higher-Order Function
// di java script
// fungsi juga dianggap setara dengan tipe data lain
// bahasa kerennya first-class order
// kita dengan mudah dapat mengirimkan fungsi sebagai parameter di fungsi lainnya.

// review set interval
setInterval(() => {
    console.log("tick")
}, 1000);

// Biar lebih jelas, mari kita buat kode diatas ke versi yang lebih panjang.
const printTick = () => {
    console.log("Tick");
}
setInterval(printTick, 1000);

// Jadi setInterval menerima sebuah parameter printTick 
// yang adalah sebuah fungsi yang akan mencetak 
// "Tick" ke layar. 

// Fungsi printTick tersebut akan dieksekusi
// setiap 1000 milidetik sekali

// hal inilah yang disebut dengan istilah higher-order function

// keuntungan
// kita bisa memecah fungsi menjadi fungsi yang lebih kecil dan kombinasikan
// fungsi yang kecil dan sederhana lebih mudah dikelola 
// dan akan memudahkan kita dalam melakukan refactoring jika dibutuhkan


// Filter

const animals = [
    { name: "Fluffy", species: "cat" },
    { name: "Carlo", species: "dog" },
    { name: "Nemo", species: "fish" },
    { name: "Hamilton", species: "dog" },
    { name: "Dory", species: "fish" },
    { name: "Ursa", species: "cat" }
];
console.log(animals)


// bagaimana mendapatkan spesies yang ikan saja
// menggunakan filter, tapi sebelum itu 
// mari kita gunakan cara konvensional: for loop.
let fish = [];
for (let i = 0; i < animals.length; i++) {
    if (animals[i].species === "fish") {
        fish.push(animals[i]);
    }
}
console.log(fish);

//  tulis ulang kode diatas dengan menggunakan filter.
fish = animals.filter((animal) => animal.species === "fish");
console.log(fish);
// method filter menerima hanya satu parameter
// filter diatas akan menghasilkan array bar

// bukan saja kode kita menjadi lebih singkat 
// akan tetapi juga kode kita menjadi lebih sederhana
//  dan mudah dimengerti

// Map
// merupakan salah satu implementasi higher-order function
// sama juga seperti filter, map juga melakukan iterasi terhadap array

// Namun berbeda dengan filter
// map tidak membuang elemen array seperti array species 
// yang dibuang apabila bukan ikan seperti contoh sebelumnya

// map melakukan transformasi terhadap elemen.
//  Jumlah elemen yang dihasilkan tetaplah sama dengan jumlah elemen array asalnya

let names = [];
for (let i = 0; i < animals.length; i++) {
    names.push(animals[i].name);
}
console.log(names);


// Atau kita bisa menggunakan method map seperti berikut.
names = animals.map((animal) => animal.name);
console.log(names);

// menghasilkan bentuk apapun dari map selama jumlah array-nya tetap sama
names = animals.map((animal) => animal.name + " is a " + animal.species);
console.log(names);

// Reduce
let orders = [
    { total: 325 },
    { total: 512 },
    { total: 128 },
    { total: 32 }
];
// Dari array diatas, saya ingin mendapatkan total harga untuk seluruh order
// Sebelum menggunakan reduce, mari kita coba dengan cara for loop.

// loop
let total = 0;
for (let i = 0; i < orders.length; i++) {
    total = total + orders[i].total;
}
console.log("total : "+total);

// Reduce menerima dua parameter. 
// Parameter pertama ada fungsi yang menghasilkan nilai (return)
// untuk kemudian digunakan kembali di iterasi berikutnya
// arameter kedua adalah nilai awal yang akan 
// digunakan seperti inisialisasi let total = 0

total = orders.reduce((total, order) => total + order.total, 0);
console.log("total : "+total);

// kesimpulan 
// menerapkan beberapa konsep functional programming
// kita dapat membuat kode kita menjadi lebih jelas
// sehingga kemungkinan munculnya bugs menjadi lebih kecil

// Di JavaScript fungsi adalah nilai yang bisa dijadikan parameter pada fungsi lainnya.
