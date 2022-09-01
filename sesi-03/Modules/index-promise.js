/*
    Promise adalah sebuah objek yang menghasilkan sebuah nilai dimasa yang akan datang. 
    Kemungkinan hasil dari promise hanya ada dua: 
        1. resolve yang biasanya disertakan dengan nilai atau value-nya 
        2. atau reject biasanya untuk kasus-kasus error dan berbagai kesalahan. 


    Analogi promise dalam kehidupan sehari-hari :
        1. membeli burger
        Ketika kita membeli burger, setelah membayar di kasir 
        yang kita dapatkan bukanlah burger,
        melainkan bukti pembayaran ataupun nomor antrian.        
        Nomor antrian bisa dimakan? Bisa, kalau sudah lapar banget.

        Dengan nomor antrian ini artinya si penjual burger menjanjikan kita sebuah burger di masa depan. 
        Burgernya sendiri saat itu sedang dimasak atau diolah.

        Meskipun sudah dijanjikan ada saja kemungkinan kita tidak mendapatkan burger
            - Misalnya burgernya hangus, dan bahan bakunya mendadak habis.
        
        - Ketika kita tidak mendapat burger karena satu dan lain hal : di Promise disebut dengan reject.
        - Sementara ketika kita bisa menikmati burger artinya : Promise kita resolve.

    Penggunaan Promise cukup sederhana :
        - kita bisa merangkai fungsi Promise dengan method .then() 
        - untuk resolve dan method .catch() untuk rejection.

    Syarat fungsi, method atau library harus sudah mendukung Promise 
        - misalnya saja fungsi fetch() > tersedia di berbagai browser modern

    Example : 
        Saya ingin mendapatkan seluruh tweet dari sebuah social media 
        kemudian saya hanya ingin menampilkan tweet 
        yang di star minimal 50 dan di retweet minimal 50

    using library : npm install node-fetch
*/

//using library node fetch
import fetch from "node-fetch";

// implicit return di arrow function
fetch('https://fake-tweets-api.herokuapp.com/posts')
    .then(response => response.json()) //resolve data
    .then(myJson => console.log(myJson)) //resolve data
    .catch(err => console.error(err)) //rejection