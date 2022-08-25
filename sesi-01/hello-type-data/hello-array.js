// Deklarasi Array
// var kode = ["react", "php", "ruby"]
// let kode = ["react", "php", "ruby"]
const kode = ["react", "php", "ruby"]
console.log(kode)

// 3 metode operasional Array pada Javascript yang penting.
// Merge 2 Array
// Untuk menggabungkan 2 array, gunakan metode push.apply
var fruits = ['anggur', 'melati', 'apel', 'jeruk'];
var buah_buahan = ['strawberry', 'pir', 'durian']
fruits.push.apply(fruits, buah_buahan)
console.log(fruits)
// output
// fruits =  ['anggur', 'melati', 'apel', 'jeruk', 'strawberry', 'pir', 'durian']

// Menghapus Item pada Array
// menghapus item pada sebuah array, asalkan anda sudah tahu indexnya, 
// kita dapat menghapus item tersebut dengan metode splice:

var fruits = ['anggur', 'melati', 'apel', 'jeruk'];
var index_yang_ingin_dihapus = 1; // karena fruits[1] = melati, kita ingin menghapus melati dari array buah-buahan ini
fruits.splice(index_yang_ingin_dihapus, 1) 
console.log(fruits)
// output
// fruits -> ['anggur', 'apel', 'jeruk']

// Mengosongkan Array
// Untuk mengosongkan array, ada beberapa orang yang memilih menggunakan cara seperti:
var fruits = ['anggur', 'melati', 'apel', 'jeruk'];
fruits = []
console.log(fruits)
// output
// fruits -> []

// Tapi metode diatas akan membuat kita kehilangan referensi di dalam variabel fruits.
// Untuk menghindarinya, kita bisa menggunakan metode splice:
var fruits = ['anggur', 'melati', 'apel', 'jeruk'];
fruits.splice(0, fruits.length)
console.log(fruits)
// fruits -> []

// Array Multidimensi
// dalam array ada angka misalnya, atau ada string, satu level aja
// apakah kita bisa menyimpan array didalam array?
var animals = ["Lion", "Tiger", "Puma"]
// Indeks array berbasis-nol 
// yang berarti urutan awalnya merupakan [0], keduanya [1], dan seterusnya.
animals[0] = 100
animals[1] = undefined
animals[3] = "Jaguar"
animals[4] = true
animals[6] = "Leopard"
animals[3] = ["Zero", 1, "Two"] // dengan kurung kotak (square brackets) dan butir-butirnya dipisah dengan koma.
animals[3][3] = "Three"
console.log(animals)
// karena 5 tidak ada akan di anggap 1 empty item

// array seperti tumpukan data
// Bayangkan sebuah botol atau toples yang berisi beberapa lapis biskuit di dalamnya.

// animals.push("Dragon") // Kita bisa mendorong (push) seperti memasukkan yang baru, 
// animals.pop() // mengeluarkan (pop) yang paling terakhir atau teratas, 
// animals.slice(0, 2) // atau bahkan mengambil beberapa lapis data
// console.log(animals)