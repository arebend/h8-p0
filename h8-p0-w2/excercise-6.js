//1. Melakukan Looping Menggunakan While
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur.
// Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.

// 'LOOPING PERTAMA'
var flag = 1;
while (flag <= 20) {
    if (flag % 2 == 0) {
        console.log(flag + ' I love coding');
    }
    flag++;
}

// 'LOOPING KEDUA'
var deret = 22;
while (deret > 2) {
    deret -= 2;
    console.log(deret + ' I will become fullstack developer');
}


// 2. Melakukan Looping Menggunakan For
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur.
// Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.

var angka = 20;
// LOOPING PERTAMA
for (var i = 1; i <= angka; i++) {
    console.log(i + ' - I love coding');
}
// LOOPING KEDUA
for (var i = angka; i > 0; i--) {
    console.log(i + ' - I will become fullstack developer');
}


// 3. Angka Ganjil dan Genap
// 1. Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// 2. Di dalam perulangan, periksa setiap angka counter:
//     Apabila angka counter adalah angka genap, tuliskan GENAP
//     Apabila angka counter adalah angka ganjil, tuliskan GANJIL
// 3. Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// 4. Pada 3 perulangan baru ini periksa setiap angka counter:
//     Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa - apa
//     Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
//     "3 kelipatan 3" dan seterusnya.

var counter = 100;

for (var i = 1; i <= counter; i++) {
    if (i % 2 == 0) {
        console.log(i + ' adalahh genap');
    } else {
        console.log(i + ' adalah ganjil');
    }
}

for (var i = 1; i <= counter; i += 2) {
    if (i % 3 == 0) {
        console.log(i + ' kelipatan 3');
    }
}

for (var i = 1; i <= counter; i += 5) {
    if (i % 6 == 0) {
        console.log(i + ' kelipatan 6');
    }
}

for (var i = 1; i <= counter; i += 9) {
    if (i % 10 == 0) {
        console.log(i + ' kelipatan 10');
    }
}