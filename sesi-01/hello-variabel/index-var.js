// Sejak ES6 Javascript memperkenalkan let dan const untuk urusan variabel.
// var tetap di pertahankan untuk menjaga kompatibilitas ke versi sebelumnya. Lalu apa bedanya ?
// Kapan harus menggunakannya ?

// Jawaban Singkatnya :
// - gunakan let hindari var
// - gunakan const untuk variabel yg nilainya statis atau tidak berubah

// Sebelum ES6 (6th Edition – ECMAScript 2015) hanya ada satu cara untuk membuat variabel

//-----------------------------------------------------------------------------

// Belajar var
var xx // declaration
xx = 1 // assignment

//disingkat menjadi
var xx = 1
console.log("hasil var xx : " + xx)

console.log()
console.log("-------------")
console.log()

// tentang var > apa dari hasil code berikut :
x = 10 //step awal sample
var x
console.log("hasil var x : " + x) //=> ???

// reassign > tidak ada pesan error sama sekali ketika terjadi duplikasi variabel.
// cara ini cukup riskan jika terjadi tanpa sengaja. :p
var foo = "hello1"
var foo = "hello2"
console.log("hasil var foo : " + foo) //=> hello

// Hoisting > sama dengan yang sebelumnya.
// Kenapa hasilnya bisa 10 ? itu karena Hoisting.
// Hoisting artinya mengangkat.
// Jadi di belakang layar sebenarnya mengangkat var xxxx di angkat keatas menjadi seperti ini :
xxx = 10
var xxx
console.log("hasil var xxx : " + xxx) //=> 10

// back to step awal
var x
x = 10
console.log("hasil var x : " + x) //=> 10
// Kenapa ini jadi masalah ? ya karena membuat sebagian besar coder bingung.

// Scope
// Block scope dalam javascript di tandai dengan simbol { }
// Scope artinya pembagian program, ini sering di temui pada if, for, switch, while dan sebagainya.
// Logikanya variabel dalam scope harusnya menjadi private dan tidak bisa di baca dari scope lain.

var b = 2
if (true) {
  b = 3
}
console.log("hasil dari variable b : " + b) //=> 3

// var masih menjadi global variabel,meskipun ada di dalam scope.
// Sebelum es6, solusinya adalah membuatnya dalam function scope

var cc = 2
function myScope() {
  var cc = 3
}
myScope()
console.log("hasil dari variable cc : " + cc) //=> 2

// di persingkat dengan anymous IIFE (Immediately Invoke Function Expression)
var dd = 2; //jika tidak menggunakan; maka akan terbaca function nya. //jika tidak menggunakan ; > tidak terbaca function
(function () {
  var dd = 3
})()
console.log("hasil dari variable dd : " + dd) //=> 2 //kenapa hasil nya tetap 2 > Jika kita Lupa deklarasi var = global

// Variabel tanpa deklarasi dan langsung di assign akan di anggap menjadi global variabel. 
// Ini karena hoisting. Global variable is evil. Sebisa mungkin hindari global variabel