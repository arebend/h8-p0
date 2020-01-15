/*
Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. 
Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. 
Spasi dan simbol diabaikan.
*/

function tukarBesarKecil(kalimat) {
    // you can only write your code here!

    // let res = '';
    // for (let i = 0; i < kalimat.length; i++) {
    //     let unico = kalimat.charCodeAt(i);
    //     res += (unico >= 65 && unico <= 90) ? String.fromCharCode(unico + 32) : (unico >= 97 && unico <= 122) ? String.fromCharCode(unico - 32) : kalimat[i];
    // }
    // return res;


    let result = '';
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === kalimat[i].toUpperCase()) {
            result += kalimat[i].toLowerCase();
        } else {
            result += kalimat[i].toUpperCase();
        }
    }
    return result;


    // let hurufKecil = ' abcdefghijklmnopqrstuvwxz'
    // let hurufBesar = ' ABCDEFGHIJKLMNOPQRSTUVWXZ'
    // let output = ''

    // for (let i = 0; i < kalimat.length; i++) {
    //     //console.log(kalimat[i]);
    //     for (let j = 0; j < hurufBesar.length; j++) {
    //         //console.log(kalimat[i] + ' === ' + hurufKecil[j] + '/' + hurufBesar[j])
    //         if (kalimat[i] === hurufBesar[j]) {
    //             output += hurufKecil[j];
    //             //console.log(output)
    //         } else if (kalimat[i] === hurufKecil[j]) {
    //             output += hurufBesar[j];
    //             //console.log(output)
    //             // } else if (kalimat[i] === '\s') {
    //             //     output += ' ';
    //             // }
    //         }

    //     }
    // }
    // return output;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"