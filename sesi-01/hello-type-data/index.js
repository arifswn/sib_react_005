//  penggunaan tipe data Number
let weight = 75
console.log(weight + 15)
// Kita tulis let weight, sama dengan 75
// nilai weight tadi dengan angka 15.
// 75 tambah 15 adalah 90

let originalNum = 23
let newNum = originalNum + 7
console.log(newNum)
// buat variabel originalNum, kita beri nilai 23
// tambahkan angka 23 yang diwakilkan oleh variable originalNum dengan angka 7
// alert akan sesuai dengan yang kita inginkan, yaitu angka 3


/*
let originalNum = 23
let numberToBeAdded = 7
let newNum = originalNum + numberToBeAdded
console.log(newNum) 
*/
// menangani penjumlahan yang isinya variable semua

// tipe data string
console.log("hello class modern javascript")
console.log("selamat datang di kelas modern java script dasar")
console.log("nama saya budi")
console.log("java script is fun")

let message = 'welcome'
console.log(message)
message = 'bye, bye'
console.log(message)

// gimana kalau kita mau menggunakan petik satu sebagai string seperti She's a great person !?\
// lalu bagaimana caranya


// jika menggunakan petik dua tetap bisa di tampilkan
message = "she's a great person"
console.log(message)

// jika menggunakan petik satu, kita bisa gunakan escape character dengan bantuan backslash seperti ini.
message = 'she\'s a great person'
console.log(message)

// htmlSnippet misalnya kemudian isinya adalah h1 dengan class header dan tulisan this is a header. 
// Kita bisa menggunakan petik dua didalam petik satu sehingga tidak masalah
let htmlSnippet = '<h1 class="header"> this is a header</h1>'
console.log(htmlSnippet);
// menggunakan petik satu dengan bantuan escape character
htmlSnippet = "<h1>class=\"header\">this is a header</h1>"
console.log(htmlSnippet);