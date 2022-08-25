
// Destructuring Function Result
const getUser = () => {
    return {
        nama: 'Arif Setiawan',
        handle: '@arif',
        location: 'Lampung, Indonesia'
    };
};

// melakukan destructuring dari hasil return sebuah fungsi
// punya fungsi getUser dan kita dapat melakukan ekstraksi mirip seperti ekstraksi pada object literal.

// extraction
const { nama, handle, location } = getUser();
console.log(nama, handle, location);