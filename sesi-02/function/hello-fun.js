const btn = document.querySelector("#ganti");
btn.addEventListener('click', function () {
    this.style.backgroundColor = 'orange';
    document.getElementById('color').style.color = "black"
});

// ganti body background
function bodyColor() {
    this.document.body.style.backgroundColor = 'red';
}

// ganti background div
function idColor() {
    let bg = document.getElementById("color").style.backgroundColor
    alert('background sebelumnya : ' + bg);

    let change = "yellow"
    document.getElementById("color").style.backgroundColor = change;

    alert('diganti menjadi background : ' + change)
}

let counter = {
    val: 0,
    increment: function () {
        this.val += 1
    }
}

const hitung = document.querySelector("#hitung");
hitung.addEventListener('click', function () {
    counter.increment()
    let hasil = counter.val
    console.log(hasil)
    document.getElementById('color').style.backgroundColor = "green"
    document.getElementById('color').style.color = "white"
    document.getElementById('color').innerHTML =  hasil
});
