/*
Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.

Untuk membantumu mengerjakan tantangan ini, gunakanlah properti lengthpada sebuah array yang akan memberikan panjang dari array-nya. 
Ingat, indeks sebuah array pada JavaScript dimulai dari 0. 
Untuk tugas ini, kamu wajib menggunakan looping dan dilarang menggunakan sintaks .reverse!
*/

function balikString(string) {
    let str = ''
    for (let i = 0; i < string.length; i++) { //increment
        // console.log(string[i]);
        str = string[i] + str
    }
    return str
};

console.log(balikString("hello world!"));
//output "!dlrow olleh"


// function balikString(string) {
//     let str = ''
//     for (let i = string.length - 1; i >= 0; i--) { //decrement
//         // console.log(string[i]);
//         str += string[i]
//     }
//     return str
// };

// console.log(balikString("Hacktiv8"));
// //output "8vitkcaH"