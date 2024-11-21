function sumRange(input) {
    let total=0;
  for (let i = input; i > 0; i--) {
    total += i;
  }
  return total;
}

console.log(sumRange(5));

function sumRangeRecursion(input){
let total =0;
if(input<=0){
return total;
}
 return sumRangeRecursion(input-1,total+input)

}


console.log(sumRangeRecursion(10));
