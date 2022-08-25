// Menggabungkan String
// Tipe data String bisa kita manipulasi.
// Menggabungkan string ini istilahnya concatenate atau singkatnya concat

// let visitor = prompt('siapakah namamu') //prompt hanya bisa dijalankan di browser
// let message = 'halo '+visitor
// alert(message)


// Cara concat seperti ini adalah cara yang valid, 
// akan tetapi jadi susah dibaca kalau kebanyakan seperti ini
// let visitor = prompt('Siapakah namamu')
// let message = 'Hallo ' + visitor + '. Selamat datang di kelas modern java script!'+
// ' Kita senang sekali kamu mau datang berkunjung, '+visitor+'. Semoga kamu berkenan datang kembali untuk belajar bersama.'
// alert (message)

// Kita bisa re-write dengan cara seperti berikut.
let visitor = prompt('Siapakah namamu')
let message = 'Hallo ' + visitor
message = message + '. Selamat datang di kelas modern java script!'
message += ' Kita senang sekali kamu mau datang berkunjung, '
message += visitor + '. Semoga kamu berkenan datang kembali untuk belajar bersama.'
alert (message)
//  kalau kita run, hasilnya juga tetap sama.
// Hanya saja code kita jadi lebih rapi.