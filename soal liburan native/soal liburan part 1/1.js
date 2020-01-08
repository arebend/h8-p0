/*

  TOL JAKARTA BANDUNG

  Karena adanya mudik lebaran maka pemerintah menerapkan sistem beberapa jalur prioritas.
  disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan yang paling cepat
  sampai ke tujuan.

  Plat nomor kuning paling cepat sampai, dilanjutkan merah, dan terakhir hitam.
  Jam keberangkatan sesuai urutan dalam array.

  [INPUT]
  [['B 1171 BA', 'merah'], ['B 1172 BA', 'kuning'], ['B 1173 BA', 'hitam'], ['B 1174 BA', 'hitam']]

  [PROCESS]
  kuning => 'B 1172 BA'
  merah => 'B 1171 BA'
  hitam => 'B 1173 BA', 'B 1174 BA'

  [OUTPUT]
  [ 'B 1172 BA', 'B 1171 BA', 'B 1173 BA', 'B 1174 BA' ]  

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function firstArrived(cars) {
  // code below here
  let arr = [
    [],
    [],
    []
  ]
  for (let i = 0; i < cars.length; i++) {
    // console.log(cars[i]);
    if (cars[i][1] === 'kuning') {
      arr[0].push(cars[i][0])
    } else if (cars[i][1] === 'merah') {
      arr[1].push(cars[i][0])
    } else if (cars[i][1] === 'hitam') {
      arr[2].push(cars[i][0])
    }
  }
  // return arr;

  let res = []
  for (let j = 0; j < arr.length; j++) {
    // console.log(arr[j]);
    for (let k = 0; k < arr[j].length; k++) {
      // console.log(arr[j][k]);
      res.push(arr[j][k])
    }
  }
  return res;
};

//TEST CASE

console.log(firstArrived([
  ['B 1171 BA', 'merah'],
  ['B 1172 BA', 'kuning'],
  ['B 1173 BA', 'hitam'],
  ['B 1174 BA', 'hitam']
]));
/*
  [ 'B 1172 BA', 'B 1171 BA', 'B 1173 BA', 'B 1174 BA' ]
*/
console.log(firstArrived([
  ['B 1174 BA', 'hitam'],
  ['B 1171 BA', 'merah'],
  ['B 1173 BA', 'hitam'],
  ['B 1172 BA', 'kuning']
]));
/*
  [ 'B 1172 BA', 'B 1171 BA', 'B 1174 BA', 'B 1173 BA' ]
*/