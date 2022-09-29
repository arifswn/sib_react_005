apa itu server side rendering (ssr) ?
------------
teknik untuk menampilkan Single Page Application (SPA)
yang akan di-render oleh server. 
Lalu, hasilnya akan diteruskan kepada client.

1. html (server sending to browser) 
2. browser (load file js/download) 
3. browser (eksekusi react js) 
4. laptop/komputer/enduser (load view page & interaksi)

1. Browser menerima response dari server sekaligus element hasil render dari server.
2. Browser kemudian mendownload file-file yang diload(css, js, dll). Pada saat ini element sudah terender.
3. Selanjutnya Browser akan mengeksekusi react. Pada saat ini element sudah terender juga.
4. Terakhir, semua element tersebut sudah bisa berinteraksi dengan user.

kelebihan :
------------
1. Search Engine Optimization (seo)
React Server Side Rendering membantu search engine melakukan crawling konten website kita.
crawling : proses mencari tahu kumpulan halaman dari sebuah web untuk dilakukan pengindeksan. 
Crawling dari search engine pada dasarnya tidak mendukung javascript. 
Aplikasi yang kita build dengan react akan di crawl oleh search engine sebagai halaman kosong.

2. Meningkatkan Performance
Setelah browser mendownload html dan css, konten akan langsung ditampilkan 
tanpa harus menunggu browser mendownload javascript atau react melakukan render pada konten.
Sehingga jika ukuran javascript kita sangat besar itu tidak akan memakan waktu untuk menampilkannya.

Kekurangan :
------------
1. Menurunkan Waktu Response Server
Pada saat menggunakan server side rendering, 
server harus melakukan proses extrak markup yang kita buat di react, 
sehingga untuk memberikan response membutuhkan waktu sedikit lebih lama. 
Jika server dalam kondisi banyak trafik maka akan terasa semakin lama.

2. Complexity
Dengan menggunakan server side rendering akan banyak improvement 
yang diperlukan untuk pengembanga sistem, sehingga akan membutuhkan waktu yang lebih banyak. 
Misalkan pengecekan jika data diambil dari Database dan Static data.

Salah satu Framework yang digunakan untuk membuat react server side rendering adalah Next.Js
Next.Js sendiri merupakan salah satu framework Node.Js yang cukup populer
untuk membuat server side rendering dengan mudah.

####################################################################################################

welcome to nextjs (package)

create auto next js
---------
npx create-next-app my-app --use-npm
npx create-next-app --ts my-nextjs-app
npm run dev

note, jika terjadi warning code di index.js / head
---------
Create file .babelrc add this code :
{
  "presets": ["next/babel"],
  "plugins": []
}
And in .eslintrc.json, replace the existing code with:
{
  "extends": ["next/babel","next/core-web-vitals"]
}
reference : https://stackoverflow.com/questions/68163385/parsing-error-cannot-find-module-next-babel

create manual next js
---------
mkdir my-app-manual
npm install next react react-dom
npm run build

####################################################################################################

getServerSideProps
---------
Jika kita mengekspor fungsi yang disebut getServerSideProps(Server-Side Rendering) dari sebuah halaman,
Next.js akan melakukan pra-render halaman
pada setiap permintaan menggunakan data yang dikembalikan oleh getServerSideProps.

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props / akan diteruskan ke komponen halaman sebagai props
  }
}

Note :
bahwa terlepas dari jenis rendering, apa pun props 
akan diteruskan ke komponen halaman dan 
dapat dilihat di sisi klien dalam HTML awal.

Ini untuk memungkinkan halaman terhidrasi dengan benar. 
Pastikan Anda tidak meneruskan informasi sensitif apa pun yang seharusnya tidak tersedia pada klien di props.

Kapan getServerSideProps dijalankan?
---------
getServerSidePropshanya berjalan di sisi server 
dan tidak pernah berjalan di browser. 

Jika halaman menggunakan getServerSideProps
- Saat Anda meminta halaman ini secara langsung, 
getServerSideProps berjalan pada waktu permintaan, 
dan halaman ini akan dirender sebelumnya dengan properti yang dikembalikan
- Saat Anda meminta halaman ini pada transisi halaman sisi klien 
melalui next/linkatau next/router, 
Next.js mengirimkan permintaan API ke server, yang berjalan getServerSideProps

- getServerSideProps mengembalikan JSON yang akan digunakan untuk merender halaman.
- getServerSidePropshanya dapat diekspor dari halaman. 
Anda tidak dapat mengekspornya dari file non-halaman.

Kapan saya harus menggunakan getServerSideProps ?
---------
Anda harus menggunakan getServerSideProps hanya jika 
Anda perlu merender halaman yang datanya harus diambil pada waktu permintaan. 
Hal ini dapat disebabkan oleh sifat data atau 
properti permintaan (seperti authorizationheader atau lokasi geografis). 

Halaman yang digunakan getServerSideProp sakan dirender di sisi server 
pada waktu permintaan dan hanya di-cache 
jika header kontrol-cache dikonfigurasi.

menggunakan getServerSideProps hanya jika Anda perlu 
merender halaman yang datanya harus diambil pada waktu permintaan.

Nilai ini dianggap baru selama sepuluh detik (s-maxage=10).
Jika permintaan diulang dalam 10 detik berikutnya, 
yang sebelumnya nilai yang di-cache akan tetap segar. 

Jika permintaan diulang sebelum 59 detik,
nilai yang di-cache akan basi tetapi masih dirender (stale-while-revalidate=59).

Di latar belakang, permintaan validasi ulang 
akan dibuat untuk mengisi cache dengan nilai baru. 
Jika Anda me-refresh halaman, Anda akan melihat nilai baru.

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {},
  }
}

reference : https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props