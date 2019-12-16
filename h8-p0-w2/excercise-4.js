var tanggal = 31; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 12; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1900; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (true) {
    case tanggal < 1:
        tanggal = ' Invalid Date ';
        break;
    case tanggal > 31:
        tanggal = ' Invalid Date';
        break;
    default:
        tanggal = tanggal;
        break;
}
switch (bulan) {
    case 1:
        bulan = ' Januari ';
        break;
    case 2:
        bulan = ' Februari ';
        break;
    case 3:
        bulan = ' Maret ';
        break;
    case 4:
        bulan = ' April ';
        break;
    case 5:
        bulan = ' Mei ';
        break;
    case 6:
        bulan = ' Juni ';
        break;
    case 7:
        bulan = ' Juli ';
        break;
    case 8:
        bulan = ' Agustus ';
        break;
    case 9:
        bulan = ' September ';
        break;
    case 10:
        bulan = ' Oktober ';
        break;
    case 11:
        bulan = ' November ';
        break;
    case 12:
        bulan = ' Desember ';
        break;
    default:
        bulan = ' Invalid Month ';
        break;
}

switch (true) {
    case tahun < 1900:
        tahun = ' Invalid Year ';
        break;
    case tahun > 2200:
        tahun = ' Invalid Year ';
        break;
    default:
        tahun = tahun;
        break;
}

console.log(tanggal + bulan + tahun)