/*-------------------------------
1. MENYUSUN BARISAN BINTANG
-------------------------------*/

var rows1;

for(rows1 = 5; rows1>0; rows1--){
  console.log('*');
}

/*------------------------------------------------
2. MENYUSUN BARISAN BINTANG DENGAN NESTED LOOPING
------------------------------------------------*/

var rows2;

for(rows2 = 0; rows2<5; rows2++){
  var n = '';
  for(i = 0; i<5; i++){
    n = n + '*';
  }
  console.log(n);
}

/*-------------------------------------------------------
3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
---------------------------------------------------------*/

var rows3;

for(rows3 = 0; rows3<5; rows3++){
  var n = '';
  for(var i=0; i<=rows3;i++){
    n = n + '*';
  }
  console.log(n);
}
