/*
Buatlah sebuah function dengan nama dataHandling2yang akan menerima input array seperti di atas.

Gunakan fungsi spliceuntuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.logarray yang baru seperti di bawah.

    ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.lognama bulan sesuai dengan angka tersebut.

Gunakan splituntuk memisahkan antara tanggal, bulan, dan tahun.
Format tanggal pada data adalah dd-mm-YYYY
Misal angka bulan 01, tuliskan "Januari"
Gunakan switch caseuntuk menuliskan bulan di atas.
Pada array hasil splitdari tanggal/bulan/tahun, lakukan sorting secara descending dan console.logarray yang sudah di-sort.

Masih pada array hasil splitdari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan joindan pisahkan dengan karakter strip (-) lalu console.loghasilnya.

Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan sliceuntuk menghapus kelebihan karakter dan console.lognama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk Stringagar bisa di-slice.
*/

function dataHandling2(array) {
    /* modifikasi variabel input */
    array.splice(1, 1, "Roman Alamsyah Elsharawy");
    array.splice(2, 1, "Provinsi Bandar Lampung");
    array.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(array);

    /* print nama bulan */
    var month = array[3].split('/');
    switch (month[1]) {
        case '01':
            console.log('Januari');
            break;
        case '02':
            console.log('Februari');
            break;
        case '03':
            console.log('Maret');
            break;
        case '04':
            console.log('April');
            break;
        case '05':
            console.log('Mei');
            break;
        case '06':
            console.log('Juni');
            break;
        case '07':
            console.log('Juli');
            break;
        case '08':
            console.log('Agustus');
            break;
        case '09':
            console.log('September');
            break;
        case '10':
            console.log('Oktober');
            break;
        case '11':
            console.log('November');
            break;
        case '12':
            console.log('Desember');
            break;
        default:
            break;
    }

    /* sorting tahun/bulan/tanggal */
    var monthSort = month.slice().sort((a, b) => b - a);
    console.log(monthSort);

    /* join tanggal/bulan/tahun */
    console.log(month.join('-'));

    /* slice kelebihan karakter */
    console.log(array[1].slice(0, 15));
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);


/*
keluaran yang diharapkan (pada console)
["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
Mei
["1989", "21", "05"]
21-05-1989
Roman Alamsyah
 */