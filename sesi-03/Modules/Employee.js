/*
    Sebelum ES6, ada beberapa cara yang dapat ditempuh untuk membuat kode JavaScript kita lebih modular. 

    1. kita bisa menggunakan IIFE atau immediately-invoked function expression, 
        sebuah fungsi yang dibungkus tanda kurung untuk langsung di eksekusi. 
        example : tanda kurung (), kurung kurawal {}, kurung siku [], ada juga kurung ganda (()) ?
        1. kurung() biasanya buat function.
            example :
                deklarasi functon > function makan()
                memanggil function > makan()

        2. kurung kurawal {} biasanya buat object
            example :   const restaurant = {
                            name: 'KFC',
                            owner: 'Saya',
                        }
                        console.log(restaurant.name)

        3.  kurung siku [] / array [] mirip object
            example : 
                const restaurant = ['KFC', 'Rumah makan padang', 'CFC'];
                console.log(restaurant[1])
        4. double kurung (()) biasanya dipake callback function
            example :
                menus.forEach((menu) => console.log(menu))
            
    2. muncul CommonJS yang lazim digunakan di NodeJS dengan sintaks require dan module.exports
        1. Require membantu memuat module.
            mengimpor kode dari file, lalu memanggil file ke require('./ filepath')
            memanggil require dalam file JavaScript,
            mengeksekusi kode dalam file dan mengembalikan nilai module.export
            example :
                // testmodule.js
                module.exports = "This is a test!"// index.js
                const test = require('./testmodule.js')
                console.log(test) // => "This is a test!"
                    
    3. ada AMD atau Require.js dan 
        terakhir ES6 memberikan solusi dengan menggunakan sintaks import dan export.
        1. import fungsi helper dari helpers.js ke file lain index.js.

*/


class Employee {
    doWork(){
        return "complete!"
    }
}
export default Employee

