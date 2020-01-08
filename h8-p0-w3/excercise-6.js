/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. 
Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. 

Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. 

Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. 

Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.
*/

function angkaPalindrome(num) {
    let hasil = 0;
    let itIsPalindrome = false;
    let apaPalindrome = 0;
    let ubahBentuk = '';

    while (itIsPalindrome === false) {
        num++;
        ubahBentuk = num.toString();
        reverse = '';
        for (i = ubahBentuk.length - 1; i >= 0; i--) {
            reverse += ubahBentuk[i];
            //console.log(reverse);
        }
        apaPalindrome = parseInt(reverse);
        if (apaPalindrome == num) {
            itIsPalindrome = true;
            hasil = num;
        }
    }
    return hasil;
}


// function angkaPalindrome(num) {
//     // you can only write your code here!
//     if (num < 10)
//         return num + 1;
//     else if (palindrome(String(num)))
//         return num;
//     else
//         return angkaPalindrome(num + 1);
// }

// function palindrome(kata) {
//     if (kata.length === 0 || kata.length === 1)
//         return true;
//     else if (kata.charAt(0) === kata.charAt(kata.length - 1))
//         return palindrome(kata.slice(1, kata.length - 1));
//     return false;
// }

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001