// step 1
//deklarasi variabel
let score //sudah membuat variabel > tidak ada isi (jika di outputkan akan nampil undefined / tidak terdefinisi)
score = 50 //kita isi nilai 50 (assign nilai 50 ke variabel score)

console.log("variable score mempunyai nilai : " + score) //tampilkan dalam bentuk console
console.log("")
console.log("---------")
console.log("")

// step 2
let playerName = "Budi" //tidak akan terjadi undefined / tidak terdefinisi pada variabel
console.log("Nama Player adalah : " + playerName) //tampilkan nama player Budi
playerName = "Andy" //di assign dengan nama player Andy
console.log("Nama Player adalah : " + playerName) //tampilkan nama player Andy
/*  tips
    ----
    jika ingin menggunakan titik-koma atau semicolon dan aktifkan pragma "use strict";
    menurut standar kode : 
    jika menggunakan StandardJS[1] akan disarankan tanpa menggunakan titik koma,
    sebaliknya Google Styleguide[2] mengatakan titik koma adalah wajib.

    >> bisa digunakan dalam kondisi > bisa konsistensi "tidak menggunakan titik koma"
        atau berdasarkan situasi "menggunakan titik koma"
        dan sebaliknya :)
*/
