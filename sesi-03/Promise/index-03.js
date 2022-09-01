import _, { map } from 'underscore';
/* 
    Homework: Promise and Async/Await 
*/

const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]

//add optionals
/*
    diurutkan terbalik/membalik
*/
var arrayOfNumeric = [35, 2, 90, 3, 55, 42, 88, 1, 23, 10, 5]


/*
    Buatlah sebuah fungsi dengan nama makeAllCaps yang menerima sebuah parameter 
    yang adalah array dan me-return promise baru 
    yang membuat semua komponen array menjadi huruf kapital semua.

    Gunakan fungsi map untuk membuat fungsi makeAllCaps.

    Buat satu buah fungsi lagi dengan nama sortWords,
    yang menerima sebuah parameter dalam bentuk array 
    yang akan me-return promise baru
    yang mensortir array tersebut.

*/

// makeAllCaps(arrayOfWords)
// .then(sortWors)
// .then((result) => console.log(result))
// .catch(error => console.log(error))

// makeAllCaps(complicatedArray)
// .then(sortWors)
// .then((result) => console.log(result))
// .catch(error => console.log(error))

function makeAllCaps(arrayOfWords){
    return new Promise((resolve, reject)=>{
        //one
        // let newWords = arrayOfWords.map(function(x){ 
        //     return x.toUpperCase(); 
        // })

        //two
        let newWords = arrayOfWords.map(f => { return f.toUpperCase(); }); //ES6

        //three
        // let newWords = String.prototype.toUpperCase.apply(arrayOfWords).split(","); //using object prototype

        //four
        // let newWords = []
        // for(var i = 0; i < arrayOfWords.length; i++){ //using looping
        //     newWords[i] = arrayOfWords[i].toUpperCase();
        // }

        if (newWords)
            resolve(newWords)
        else
            reject("terjadi error")
    })
}

function sortWords(arrayOfWords){
    return new Promise((resolve, reject) => {
        let newWords = arrayOfWords.sort((a, b) => a.localeCompare(b))
        if (newWords)
            resolve(newWords)
        else
            reject("terjadi error")
    })
}

function sortNum(myArray){
    return new Promise((resolve, reject) => {
        let descNum = _.sortBy(myArray).reverse(); // add reverse jika ingin sort kebalik reverse().
        if (descNum)
            resolve(descNum)
        else
            reject("terjadi error")        
    })
}

async function callCaps(){
    /* step 1
        makeAllCaps yang menerima sebuah parameter 
        yang adalah array dan me-return promise baru 
        yang membuat semua komponen array menjadi huruf kapital semua.
    */
    let resultCaps = await makeAllCaps(arrayOfWords)
    console.log("caps lock : "+resultCaps)

    /* step 2
        buah fungsi lagi dengan nama sortWords,
        yang menerima sebuah parameter dalam bentuk array 
        yang akan me-return promise baru
        yang mensortir array tersebut.
    */
    let resultSort = await sortWords(resultCaps)
    console.log("caps lock with sort words : "+resultSort)

    /* step 3
        buah fungsi lagi dengan nama arrayOfNumeric,
        yang menerima sebuah parameter dalam bentuk array numeric
        yang akan me-return promise baru
        yang mensortir array tersebut.
    */
    let resultNum = await sortNum(arrayOfNumeric)
    console.log("caps lock with sort numeric : "+resultNum)
    
}

callCaps()