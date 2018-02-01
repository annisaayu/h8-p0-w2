/*----------------------------
	KONVERSI MENIT
----------------------------*/

function konversiMenit(menit) {
  var jam = Math.floor(menit / 60);
  var mnt = menit % 60;
  var result;
  if(mnt>9){
    result =jam+ ':' +mnt;
  }else{
    result =jam+ ':0' +mnt;
  }
  return result;
}


console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
