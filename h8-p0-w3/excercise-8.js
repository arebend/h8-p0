/*
Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. 
Function akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. 
Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.
*/

// function pasanganTerbesar(num) {
//     // you can only write your code here!
//     let arr = [],
//         result = 0;
//     while (num / 10) {
//         arr.unshift(num % 10);
//         num = Math.floor(num / 10);
//     }
//     for (let i = 0; i < arr.length - 1; i++) {
//         var temp = arr[i] * 10 + arr[i + 1];
//         if (temp > result)
//             result = temp;
//     }
//     return result;
// }

function pasanganTerbesar(num) {
    let ubahNum = num.toString();
    let hasil = 0;
    for (i = 0; i < ubahNum.length; i++) {
        if (hasil < Number(ubahNum[i] + ubahNum[i + 1])) {
            hasil = Number(ubahNum[i] + ubahNum[i + 1]);
        }
    }
    return hasil;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99