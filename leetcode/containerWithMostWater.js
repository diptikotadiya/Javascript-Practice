var maxArea = function(height) {
  let mostWater =0;
  i = 0;
  j = height.length-1;
  while(i<j){
    let width = Math.abs(i-j);
    let minHeight = 0;
    if(height[i] <= height[j]){
        minHeight = height[i] 
        i++
      }
      else {
        minHeight = height[j];
        j--
      }
    let water = minHeight * width;
   ( water > mostWater) && (mostWater = water)
  }
  console.log(mostWater);
  return mostWater;
};


maxArea([1,8,6,2,5,4,8,3,7]);
maxArea([1,1]);
maxArea([1,2,1]);