/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  menghitung persentase jumlah pemudik kendaraan.

  [INPUT]
  cars = ['B', 'D', 'B', 'B', 'A', 'C', 'D']

  [PROCESS]
  cars plat - B ada 4/7
  cars plat - D ada 2/7
  cars plat - A ada 1/7
  cars plat - C ada 1/7

  [OUTPUT]
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function mostCarsByState(cars) {
  //code below here
  let arr = [];
  for (let i = 0; i < cars.length; i++) {
    let found = false;
    for (let j = 0; j < arr.length; j++) {
      if (cars[i] === arr[j][0]) {
        found = true;
        arr[j][1] += 1;
      }
    }
    if (found === false) arr.push([cars[i], 1])
  }
  // return arr;

  let output = []
  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i][0], arr[i][1] / cars.length * 100)
  }
  return output;
};


console.log(mostCarsByState(['B', 'D', 'B', 'B', 'A', 'C', 'D']));

/*
['B', 42.857142857142854, 'D', 28.57142857142857, 'A', 14.285714285714285, 'C', 14.285714285714285]
*/