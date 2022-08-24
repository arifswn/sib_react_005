//Let
// Cara kerja let hampir sama dengan var, bedanya di scope.
// var adalah function scope, sedangkan let adalah block scope.

// apakah let bisa digunakan untuk solusi dari problem var diatas ?
// Mari kita coba problem var diatas dengan menggantinya menjadi let.

//reassign
// let foo = 'hello1'
// let foo = 'hello2' //=> TypeError: Duplicate declaration "foo"
// console.log("hasil variabel foo : " + foo)
// hasilnya type error, artinya let tidak akan mengijinkan membuat duplikasi varibel

//Hoisting
// x = 10
// let x
// console.log("hasil variabel x : " + x) //=> ReferenceError: x is not defined
//hasilnya ReferenceError. 
//Hoisting tidak berlaku pada let dab variabel let harus di defenisikan terlebih dahulu sebelum di assign atau eksekusi

//Scope
//let adalah block scope, sehingga kita tidak perlu harus berurusan lagi dengan function untuk membuat local variabe
let b = 2
if (true){
  let b = 3
}
console.log("hasil variabel b : " + b) //=> 2