/*
  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  yang paling cepat sampai ke tujuan, berdasarkan laju dan kecepatan sampai di 
  tujuan.

  [INPUT]
  cars = [['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]]
  info: ['PLAT NOMOR', 'SPEED', 'CURRENT POSITION']
  totalKM = 450

  [PROCESS]
  butuh waktu = jarak tersisa / kecepatan
  cars ke - 0 = butuh waktu 2,5 jam
  cars ke - 1 = butuh waktu 2,25 jam
  cars ke - 2 = butuh waktu 2.35 jam
  cars ke - 3 = butuh waktu 6.3 jam

  [OUTPUT]
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function winner(cars, totalKM) {
  //code below here
  let arr = []
  for (let i = 0; i < cars.length; i++) {
    // console.log(cars[i]);
    // let jarakTersisa = totalKM - cars[i][2]
    // let kecepatan = cars[i][1]
    let waktu = arr.push([cars[i][0], (totalKM - cars[i][2]) / (cars[i][1])])
  }
  // return arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][1] > arr[j][1]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  // return arr
  let res = []
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i][0]);
    res.push(arr[i][0])
  }
  return res
};

console.log(winner([
  ['B 1171 BA', 100, 200],
  ['B 1172 BA', 200, 0],
  ['B 1173 BA', 98, 220],
  ['B 1174 BA', 80, 400]
], 450));
/*
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]
*/