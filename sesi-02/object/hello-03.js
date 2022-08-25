const user = {
    nama: 'Arif Setiawan',
    handle: '@arif',
    location: 'Lampung, Indonesia'
}

// sample menggunakan dot notation > 
// dipaksa menambahkan satu persatu properti
// const nama = user.nama
// const handle = user.handle
// const location = user.location
// console.log(nama, handle, location)

// extraction
// Dengan destructuring kita bisa melakukan ekstraksi banyak properti sekaligus dari sebuah objek. 
// secara drastis jumlah baris kode yang kita buat akan menjadi lebih sedikit.

const { nama, handle, location } = user;
console.log(nama, handle, location);