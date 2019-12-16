var string = '';

// 1. Menyusun Barisan Bintang
for (var i = 0; i < 5; i++) {
    console.log(string + '*');
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
for (var i = 0; i < 5; i++) {
    console.log(string + '*****');

}
//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
for (var i = 0; i < 5; i++) {
    string += '*';
    console.log(string);
}