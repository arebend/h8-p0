/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/

function changeVocals(str) {
    //code di sini
    var change = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            change += 'b'
        } else if (str[i] === 'i') {
            change += 'j'
        } else if (str[i] === 'u') {
            change += 'v'
        } else if (str[i] === 'e') {
            change += 'f'
        } else if (str[i] === 'o') {
            change += 'p'
        } else if (str[i] === 'A') {
            change += 'B'
        } else if (str[i] === 'I') {
            change += 'J'
        } else if (str[i] === 'U') {
            change += 'V'
        } else if (str[i] === 'E') {
            change += 'F'
        } else if (str[i] === 'O') {
            change += 'P'
        } else {
            change += str[i]
        }
    }
    return change;
}

function reverseWord(str) {
    //code di sini
    var reverse = '';
    for (let j = str.length - 1; j >= 0; j--) {
        reverse += str[j];
    }
    return reverse;
}

function setLowerUpperCase(str) {
    //code di sini
    var text = ''
    for (let k = 0; k < str.length; k++) {
        if (str[k] === str[k].toLowerCase()) {
            text += str[k].toUpperCase()
        } else {
            text += str[k].toLowerCase()
        }
    }
    return text;
}

function removeSpaces(str) {
    //code di sini
    var spasi = ''
    for (let l = 0; l < str.length; l++) {
        if (str[l] === ' ') {
            str[l] = ''
        } else {
            spasi += str[l]
        }
    }
    return spasi;
}

function passwordGenerator(name) {
    //code di sini
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    } else {
        var paramPertama = changeVocals(name)
        var paramKedua = reverseWord(paramPertama)
        var paramKetiga = setLowerUpperCase(paramKedua)
        var paramKempat = removeSpaces(paramKetiga)
        return paramKempat;
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'