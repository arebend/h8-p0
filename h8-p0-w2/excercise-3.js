// //Contoh input
// var nama = 'Mikael';
// var peran = '';


// // Output untuk Input nama = '' dan peran = ''
// "Nama harus diisi!"

// //Output untuk Input nama = 'Mikael' dan peran = ''
// "Halo Mikael, Pilih peranmu untuk memulai game!"

// //Output untuk Input nama = 'Nina' dan peran 'Ksatria'
// "Selamat datang di Dunia Proxytia, Nina"
// "Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

// //Output untuk Input nama = 'Danu' dan peran 'Tabib'
// "Selamat datang di Dunia Proxytia, Danu"
// "Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

// //Output untuk Input nama = 'Zero' dan peran 'Penyihir'
// "Selamat datang di Dunia Proxytia, Zero"
// "Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"

var nama = 'Mikael'; // input : Mikael, Nina, Danu, Zero
var peran = 'Tabib'; // pilih salah satu : Ksatria, Tabib, dan Penyihir

if (nama == '') {
    console.log('nama harus diisi');
} else if (peran == '') {
    console.log('Hello ' + nama + ', Pilih peranmu untuk memulai game');
} else if (peran === 'Ksatria') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + '\n' + 'Kamu dapat menyerang dengan senjatamu');
} else if (peran === 'Tabib') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + '\n' + 'kamu akan membantu temanmu yang terluka');
} else if (peran === 'Penyihir') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + '\n' + 'ciptakan keajaiban yang membantu kemenanganmu');
} else {
    console.log('pilih peranmu untuk memulai game');
}