
const user = {
    nama: 'Arif Setiawan',
    handle: '@arif',
    location: 'Lampung, Indonesia'
}
console.log(user)
// properti banyak sekaligus, kita juga bisa menggunakan object literal notation saat mendefinisikan object.

const nama = user.nama
const handle = user.handle
const location = user.location
console.log(nama, handle, location)

// Sebelum fitur destructuring ini muncul, 
// meskipun kita sudah bisa menambahkan properti dengan banyak sekaligus 
// seperti contoh diatas  
// untuk melakukan ekstraksi data sekaligus tidak bisa dilakukan
