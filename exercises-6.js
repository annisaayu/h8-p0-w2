/*-------------------------------
1. LOOPING MENGGUNAKAN 'WHILE'
-------------------------------*/

console.log('LOOPING PERTAMA');
var n = 2;
while(n <= 20){
  console.log(n + ' - I love coding');
  n = n + 2;
}

console.log('LOOPING KEDUA');
var y = 20;
while(y >= 2){
  console.log(y + ' - I will become fullstack developer');
  y = y - 2;
}

/*-------------------------------
2. LOOPING MENGGUNAKAN 'FOR'
-------------------------------*/

console.log('LOOPING PERTAMA');
for(var i = 1; i <= 20 ; i++){
  console.log(i + ' - I love coding');
}
console.log('LOOPING KEDUA');
for(var i = 20; i > 0 ; i--){
  console.log(i + ' - I will become fullstack developer');
}

/*-------------------------------
3. ANGKA GANJIL DAN GENAP
-------------------------------*/

//contoh - ganjil genap
for(var i = 1; i <= 100; i++){
  if(i % 2 !== 0){
    console.log(i+ ' - GANJIL');
  }else{
    console.log(i+ ' - GENAP');
  }
}
//pertambahan counter 2
for(var i = 1; i <= 100; i += 2){
  if(i % 3 === 0){
    console.log(i+ ' KELIPATAN 3');
  }else{
    console.log('');
  }
}
//pertambahan counter 5
for(var i = 1; i <= 100; i += 5){
  if(i % 6 === 0){
    console.log(i+ ' KELIPATAN 6');
  }else{
    console.log('');
  }
}
//pertambahan counter 9
for(var i = 1; i <= 100; i += 9){
  if(i % 10 === 0){
    console.log(i+ ' KELIPATAN 10');
  }else{
    console.log('');
  }
}
