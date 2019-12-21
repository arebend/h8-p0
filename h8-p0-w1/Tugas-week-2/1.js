/*
------------
LOST NUMBERS
------------
PROBLEM
=======
	lostNumbers adalah sebuah function yang akan menerima tiga parameter.
	Tiga parameter tersebut adalah tiga angka yang berbeda.
	Function akan mengembalikan setiap angka diantara angka pada tiga parameter tersebut, dari nilai parameter terkecil ke parameter terbesar
	kecuali angka yang di input pada parameter
Contoh:
	first = 6, second = 1, third = 3
	terbesar adalah 6, terkecil adalah 1,
	maka function mengembalikan urutan angka secara berurutan seperti:
	2, 4, 5

Jika tidak ada angka yang ditampilkan, maka output "Tidak ada angka sama sekali".

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
*/

//Pseudocode
/*
 * 
 * 
 * 
 *
 */

function lostNumbers(first, second, third) {
	let tampung = [first, second, third]
	// console.log(tampung);

	for (let i = 0; i < tampung.length; i++) {
		for (let j = i + 1; j < tampung.length; j++) {
			if (tampung[i] > tampung[j]) {
				let temp = tampung[i]
				tampung[i] = tampung[j]
				tampung[j] = temp
			}
		}
	}
	// console.log(tampung);

	let arr = []
	for (let i = tampung[0] + 1; i < tampung[2]; i++) {
		// console.log(tampung[0] + 1);
		// console.log(tampung[2]);
		if (i !== tampung[1]) {
			arr.push(i)
		}
	}
	// return arr;

	let str = ''
	for (let i = 0; i < arr.length; i++) {
		if (i === arr.length - 1) {
			str += arr[i]
		} else {
			str += arr[i] + ', '
		}
	}

	if (arr.length !== 0) {
		return str
	} else {
		return 'Tidak ada angka sama sekali'
	}
}

console.log(lostNumbers(1, 3, 5));
// // 2, 4

console.log(lostNumbers(4, 6, 2));
// // 3, 5

console.log(lostNumbers(100, 108, 105));
// // 101, 102, 103, 104, 106, 107

console.log(lostNumbers(6, 5, 3));
// // 4

console.log(lostNumbers(3, 1, 2));
// // Tidak ada angka sama sekali

console.log(lostNumbers(1, 1, 1));
// // Tidak ada angka sama sekali