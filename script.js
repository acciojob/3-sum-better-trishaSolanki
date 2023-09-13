function threeSum(arr, target) {
// write your code here let start = i+1,end = nums.length -1;
 while(start < end){
       const sum = nums[i]+nums[start]+nums[end];
     if(sum === 0){
         ans.push([nums[i],nums[start],nums[end]]);
         start++;
         end--;
         while(start<end && nums[start]===nums[start-1]) start++;
         while(start<end && nums[end]=== nums[end+1])end-=1;
     }
     else if(sum < 0) start++;
     else if(sum>0) end--;
     }
  
}

module.exports = threeSum;
