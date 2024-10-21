var twoSum = function(numbers, target) {
  let i=1;
  let j=numbers.length
  while(i<j){
    if((numbers[i-1]+numbers[j-1]) > target){
      j--
    }
    if((numbers[i-1]+numbers[j-1]) < target){
      i++
    }
    if((numbers[i-1]+numbers[j-1]) === target){
      console.log(i,j)
      return i,j;
    }
  }
};
twoSum([2,7,11,15],9);
twoSum([2,3,4],6);
twoSum([-1,0],-1);