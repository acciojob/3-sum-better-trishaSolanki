function threeSum(S, target) {
    // Sort the array first
    S.sort((a, b) => a - b);

    let closestSum = Infinity;

    for (let i = 0; i < S.length - 2; i++) {
        let left = i + 1;
        let right = S.length - 1;

        while (left < right) {
            const currentSum = S[i] + S[left] + S[right];

            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                return closestSum; // If the exact sum is found
            }
        }
    }

    return closestSum;
}

module.exports = threeSum;
