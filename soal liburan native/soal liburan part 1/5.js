/*
  PALINDROME CHANGER

  Palindrome changer adalah sebuah fungsi untuk mengubah semua isi
  array of numbers menjadi angka palindrome. Palindrome adalah sebuah kata atau angka
  yang sama nilainya ketika dibalik.

  EXAMPLE:
  console.log(palindromeChanger([102, 12, 47]))
  // [ 111, 22, 55]
*/

// function palindromeChanger(numbers) {
//   // code below here
//   let result = []
//   for (let i = 0; i < numbers.length; i++) {
//     temp = numbers[i].toString()
//     for (var j = 0; j < temp.length; j++) {
//       tempRev = ""
//       for (let j = temp.length - 1; j >= 0; j--) {
//         tempRev += temp[j]
//       }
//       if (temp === tempRev) {
//         result.push(Number(temp))
//         break
//       } else {
//         temp = Number(temp) + 1
//         temp = temp.toString()
//         j = 0
//       }
//     }
//   }
//   console.log(result)
// }

function palindromeChanger(numbers) {
  // code below here
  let arr = []
  for (let i = 0; i < numbers.length; i++) {
    let found = false
    let angka = numbers[i]

    while (found == false) {
      let strAngka = String(angka)
      let strPal = ''

      for (let j = strAngka.length - 1; j >= 0; j--) {
        strPal += strAngka[j]
      }

      if (strAngka == strPal) {
        arr.push(Number(strPal))
        found = true
      }
      angka++
    }
  }
  return arr
}

console.log(palindromeChanger([117, 9, 20, 30, 42]))
// [ 121, 9, 22, 33, 44 ]