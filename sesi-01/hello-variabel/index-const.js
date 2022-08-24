//Const atau Konstanta, 
//dari namanya bisa di tebak. 
//Variabel yang sifatnya tetap atau dengan kata lain nama dan isi dari variabel tidak bisa di ubah

// const KEY = 123
// KEY = 456 //=> TypeError: Assignment to constant variable.
// console.log("Hasil const KEY : " + KEY)

const KEY = 123
// var KEY = 456 //=> TypeError: Assignment to constant variable.
console.log("Hasil const KEY : " + KEY)

// JIKA PADA Object dan Array > tidak berlaku
const obj = { id:1, name:'jhon'}
obj.location="medan"
console.log(obj) //=> { id:1, name:'jhon',location:'medan'}

// obj = {}
// obj = { id:2, name:'thomas', location:'lampung'} //=> TypeError: Assignment to constant variable.

obj.location = "Lampung"
console.log(obj)

const arr=[1,2,3,4]
arr.push(5)
console.log(arr) //=> [1,2,3,4,5]

// arr=[] //=> TypeError: Assignment to constant variable.

arr.push(6)
console.log(arr)
