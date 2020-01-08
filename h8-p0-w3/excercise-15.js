/*
Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string.
Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. 
Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika animalsadalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
*/

function groupAnimals(animals) {
    // you can only write your code here!
    for (let i = 0; i < animals.length; i++) {
        for (let j = i + 1; j < animals.length; j++) {
            if (animals[i] > animals[j]) {
                let temp = animals[i]
                animals[i] = animals[j]
                animals[j] = temp
            }
        }
    }

    let output = [];
    let result = [];
    for (let i = 0; i < animals.length; i++) {
        if (output.length == 0) {
            output.push(animals[i]);
        } else if (animals[i][0] == animals[i - 1][0]) {
            output.push(animals[i]);
        } else if (animals[i][0] != animals[i - 1][0]) {
            result.push(output);
            output = [];
            output.push(animals[i]);
        }
    }
    result.push(output);
    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['anoa', 'ayam'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['anoa', 'ayam'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]