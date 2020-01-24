/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: < nama_hero > - < tipe_hero > , < nama_hero > - < tipe - hero > , ...

    Output yang diharapkan: [
        [ < daftar_hero_dengan_tipe_ranged > ],
        [ < daftar_hero_dengan_tipe_melee > ]
    ]

Jika input adalah string kosong('') maka return array kosong
*/

function meleeRangedGrouping(str) {
    var result = [
        [],
        []
    ];
    var output = [];
    var temp = '';

    for (let i = 0; i < str.length; i++) {
        // console.log(str[i]);
        if (str[i] != '-' && str[i] != ',') {
            temp += str[i];
        } else if (str[i] == '-' || str[i] == ',') {
            output.push(temp)
            temp = ''
            // console.log(output);
        }
    }
    output.push(temp);

    for (let j = 0; j < output.length; j += 2) {
        // console.log(output[j]);
        if (output[j + 1] === 'Ranged') {
            result[0].push(output[j])
        } else if (output[j + 1] === 'Melee') {
            result[1].push(output[j])
        }
    }
    return !str.length ? [] : result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // 