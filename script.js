const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter the target number: ', target => {
  target = Number(target);
  readline.question('Enter the array elements separated by space: ', arr => {
    arr = arr.split(' ').map(Number);
    let ans = threeSum(arr, target);
    console.log(`The sum that is closest to the target is: ${ans}`);
    readline.close();
  });
});

function threeSum(nums, target) {
  nums.sort((a, b) => a - b);  // Sort the array
  let closestSum = nums[0] + nums[1] + nums[2];  // Initialize closestSum with the sum of the first three elements

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      let currentSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;  // Update closestSum if the currentSum is closer to the target
      }
      if (currentSum < target) {
        left++;  // Move the left pointer to the right
      } else {
        right--;  // Move the right pointer to the left
      }
    }
  }
  return closestSum;
}
