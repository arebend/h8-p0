/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2.
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

function targetTerdekat(arr) {
    // you can only write your code here!

    // return arr.indexOf('x') - arr.indexOf('o') > 0 ? arr.indexOf('x') - arr.indexOf('o') : (arr.length - 1) + (arr.indexOf('x') - arr.indexOf('o'));

    let result = [
        [],
        []
    ]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            result[0].push(i)
        } else if (arr[i] === 'x') {
            result[1].push(i)
        }
    }
    // return result;

    // let shortest = arr.length;
    for (i = 0; i < result[0].length; i++) {
        for (let j = 0; j < result[1].length; j++) {
            let temp = Math.abs(result[0][i] - result[1][j]);
            if (arr.length > temp)
                arr.length = temp;
        }
    }

    if (result[0].length > 0 && result[1].length > 0) {
        return arr.length
    } else {
        return 0
    }
};


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2