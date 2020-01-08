/**
Partial Check
-----------
Implementasikan function `partialCheck` untuk menghitung ada berapa kali string yang perlu dicari
terdapat di dalam `str` berdasarkan `partial` yang dicari.
Contoh 1:
input:
  str: 'abcdabcdabc'
  partial: 'abc' ==> berarti mencari partial "abc"
output: found 3 times
Contoh 2:
input:
  str: 'abbccdab'
  partial: 'd' ==> berarti mencari partial "d"
output: found 1 time
Contoh 2:
input:
  str: 'foggycloud'
  partial: 'foggly' ==> berarti mencari partial "foggly"
output: not found
RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX
*/

/*
PSEUDOCODE
*/





// function partialCheck(str, partial) {
//   //your code here
//   let output = []
//   str = str.toLowerCase()
//   count = 0
//   j = 0

//   for (let i = 0; i <= str.length; i++) {

//     if (j === partial.length) {
//       count++
//       j = 0
//     }
//     if (str[i] === partial[j]) {
//       j++
//     } else {
//       j = 0
//       if (str[i] === partial[j]) {
//         j++
//       }
//     }
//   }
//   // return count
//   if (count == 0) {
//     return 'not found'
//   } else if (count == 1) {
//     return `found ${count} time`
//   } else {
//     return `found ${count} times`
//   }
// };

function partialCheck(str, partial) {
  //your code here   
  let count = 0
  for (let i = 0; i < str.length; i++) {
    let temp = ''
    if (str[i].toLowerCase() == partial[0]) {
      for (let j = 0; j < partial.length; j++) {
        temp += str[i + j]
      }
      // console.log(temp);
    }
    if (temp.toLowerCase() == partial) {
      count++
    }
  }

  if (count == 0) {
    return 'not found'
  } else if (count == 1) {
    return `found ${count} time`
  } else {
    return `found ${count} times`
  }
};

// function partialCheck(str, partial) {
//   //your code here   
//   let string = str.toLowerCase()
//   let count = 0

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == partial[0] && string[i + 1] == partial[1] && string[i + 2] == partial[2]) {
//       count++
//     }
//   }

//   if (count == 0) {
//     return 'not found'
//   } else if (count == 1) {
//     return `found ${count} time`
//   } else {
//     return `found ${count} times`
//   }
// };

console.log(partialCheck('abcdcabdabc', 'abc')); // found 2 times
console.log(partialCheck('zachariah', 'ach')); // found 1 time
console.log(partialCheck('accHghebchg', 'chg')); // found 2 times
console.log(partialCheck('asjekfogiy', 'foy')); // not found