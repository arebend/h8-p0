/*
Diberikan sebuah function tentukanDeretAritmatika(arr) yang menerima satu parameter berupa array yang terdiri dari angka. 
Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika. 
Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. 
Contoh, [2, 4, 6, 8] adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan [2, 4, 6, 9] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten.
*/

function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    let selisih = arr[1] - arr[0]; // 2-1 = 1
    for (let i = 1; i < arr.length; i++) {
        // console.log(arr[i]);      // 2,3,4,5,6
        // console.log(arr[i - 1]);  // 1,2,3,4,5
        if (arr[i] !== arr[i - 1] + selisih) { // 2 != 1 + 1
            return false;
        }
    }
    return true;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false