/*
Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka.
Function akan me - return true jika angka tersebut adalah bilangan prima.
Jika tidak, return false.
*/

function angkaPrima(angka) {
    // you can only write your code here!
    for (var i = 2; i < angka; i++) {
        if (angka % i === 0) {
            return false;
        }
    }
    return angka > 1;
}
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

// TEST CASES
console.log(angkaPrima(1))
console.log(angkaPrima(2))
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(11))
console.log(angkaPrima(15))
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false