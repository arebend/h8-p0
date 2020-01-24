/*
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka.
Function akan me - return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang.
Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:
512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.
*/


function totalDigitRekursif(angka) {
    // you can only write your code here!
    if (angka / 10 < 1) {
        return angka;
    } else {
        return angka % 10 + totalDigitRekursif(Math.floor(angka / 10));
    }
}
// TEST CASES
console.log(totalDigitRekursif(512)); // 8
/*
return = (512 / 10) = 51,2 < 1      \\=> 51, 2 lebih besar dari 1 return kondisi else kedua
return = (512 mod 10) + (funtion(math.floor(512 / 10))
return = 2 + (51)

return = 2 + (51 / 10) = 5, 1 < 1    \\ => 5, 1 lebih besar dari 1 return kondisi else kedua
return = 2 + (51 mod 10) + (funtion(math.floor(51 / 10))
return = 2 + 1 + funtion(5)

return = 2 + 1 + funtion(5 /10) = 0,2 < 1   \\ => 0,2  tidak lebih besar dari 1 return kondisi pertama

return = 2 + 1 + 5
*/
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
/*
return = funtion(5 / 10) = 0, 2 < 1      \\ => 0, 2 tidak lebih besar dari 1 return kondisi pertama

return = 5
*/
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5