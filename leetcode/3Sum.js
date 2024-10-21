/*var threetotal = function(nums) {
  let l = nums.length;
  let output = [];
  for(i=0;i<l;i++){
    for(j=i+1;j<l;j++){
      for(k=j+1;k<l;k++){
        if(nums[i]+nums[j]+nums[k] === 0){
          output.push([nums[i],nums[j],nums[k]]);
        }
      }
    }
  }
  console.log(output);
};
*/


//optimised Approch

var threetotal = function(nums) {
  nums.sort((a, b) => a - b); // Sort the array first
  let l = nums.length;
  let output = [];

  for (let i = 0; i < l - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for the firdt element

    let j = i + 1;
    let k =  l - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        output.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++; // Skip duplicates for the second element
        while (j < k && nums[k] === nums[k - 1]) k--; // Skip duplicates for the third element
        j++;
        k--;
      }
      else {
        while (sum<0 && j < k && nums[j] === nums[j + 1]) j++; // Skip duplicates for the second element
        while (sum<0 && j < k && nums[k] === nums[k - 1]) k--; 
        sum<0 ? j++ : k--;
      }
    }
  }
  console.log(output);
  return output;
};



threetotal([-1,0,1,2,-1,-4]);
threetotal([0,1,1])