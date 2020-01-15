/*
Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. 
Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. 
Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.
*/

function urutkanAbjad(str) {
    // you can only write your code here!

    // return str.split('').sort().join('');

    let abjad = 'abcdefghijklmnopqrstuvwxyz'

    let res = ''
    for (let i = 0; i < abjad.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (abjad[i] == str[j]) {
                res += abjad[i]
            }
        }
    }
    return res
};

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'