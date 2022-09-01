/*
    jika sebuah fungsi belum mendukung Promise, bagaimana caranya supaya bisa menggunaakn Promise.
    Kita harus membungkus fungsi tersebut kedalam sebuah Promise baru.

    method setTimeout, temannya setInterval yang tadinya adalah sebuah fungsi callback
    yang belum mendukung Promise kita 'sulap' menjadi Promise 
    sehingga kita bisa rangkai dengan method .then() dalam penggunaannya.

    Cara penggunaan setTimeout dengan setInterval kurang lebih sama.
    setTimeout menerima dua parameter: fungsi callback, 
    dan durasi berapa lama waktu yang ditundah sampai fungsi callback dipanggil. 

    Bedanya adalah setTimeout akan selesai ketika fungsi callback dipanggil, 
    sementara setInterval > akan terus menjalankan fungsi callback hinggal kita lakukan clearInterval().
*/
setTimeout(() => {
    console.log('Tick')
}, 1000);

/* 
    membuat Promise baru, kita bisa gunakan format sintaks seperti berikut ini.
    example code :
*/
const doSomething = function () {
    return new Promise((resolve, reject) => {
        /*
            todo : try to do something asynchronously and resolve
            or reject according to operation result.
        */
    })
}

//call doSomething and receive a Promise as return
let doIt = doSomething()

//wait for the promise to get resolved
doIt.then(response => {
    //use response
})

// .. or to get rejected
doIt.catch(error => {
    //deal with error
})

/* ------------------------- */
/* Jadi kita bisa 'membungkus' setTimeout dengan sintaks promise diatas 
    sehingga menghasilkan versi setTimeout yang memiliki Promise.
*/

const setTimeoutPromise = (duration) => 
    new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })

//Sehingga kita bisa menggunakannya seperti ini.
setTimeoutPromise(1000).then(() => console.log('Tick'))

