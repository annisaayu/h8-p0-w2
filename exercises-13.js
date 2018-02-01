/*----------------------
	X DAN O
----------------------*/

function xo(str) {
  var x,o,result;
  for(var i = 0; i<str.length;i++){
    if(str[i] === 'x'){
      x = x + str[i];
    }else{
      o = o + str[i];
    }
  }
  if(x.length === o.length){
    result = true;
  }else{
    result = false;
  }
  return result;
}


console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
