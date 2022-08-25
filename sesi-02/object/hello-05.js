// Destructuring Array

const csv = "1997, Ford, F350, Must Sell!";
const [ year, make, model, description ] = csv.split(",");

console.log("Tahun : "+year)
console.log("Merk : "+make)
console.log("Model : "+model)
console.log("Description : "+description)

// Aliasing Object Properties
// Kita juga bisa memberi nama lain untuk properti yang kita ekstrak.
//  Misalnya saja properti dari sebuah object
//  memiliki penamaan yang buruk dan kurang jelas. 

// Dengan destructuring kita bisa memberi alias 
// terhadap nama properti tersebut sehingga nama variable 
// menjadi lebih jelas dan lebih dapat dipahami.

const user = {
    n: 'Arif Setiawan',
    h: '@arif',
    l: 'Lampung, Indonesia'
}

// extraction
const { n: name1, h: handle1, l: location1 } = user;
console.log(name1, handle1, location1);

// Kesimpulan
/* Fitur yang namanya destructure. 
    Dengan destructure, 
    kita dengan mudah mengekstrak berbagai
    struktur data baik itu object, 
    array ataupun hasil invokasi dari sebuah fungsi yang tentu mereturn object ataupun array.
*/