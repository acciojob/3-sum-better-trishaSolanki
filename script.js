const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

function threeSum(nums, target) {
  nums.sort((a, b) => a - b); // Sort the array
  let closestSum = nums[0] + nums[1] + nums[2]; // Initialize closestSum with the sum of the first three elements

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let currentSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum; // Update closestSum if the currentSum is closer to the target
      }
      if (currentSum < target) {
        left++; // Move the left pointer to the right
      } else {
        right--; // Move the right pointer to the left
      }
    }
  }
  return closestSum;
}

app.post('/threesum', (req, res) => {
  const { arr, target } = req.body;
  if (!arr || !target) {
    return res.status(
