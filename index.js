var a = 1;
function sumOfSquare(num){
  var sum =0;
  for(var i=0 ; i<num; i++){
      sum = sum+Math.sqrt(i);
  }
  return sum;
}

function approxSumOfSquare(num){
   return 2/3 * (Math.pow(num,3/2) - 1)
}


console.log(sumOfSquare(4));
console.log(approxSumOfSquare(4));