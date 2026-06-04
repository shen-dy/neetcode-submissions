class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    const result = [];
    if (nums.length < 3) return result;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1,
        right = nums.length - 1;
      while (left < right) {
        const sum = nums[left] + nums[right] + nums[i];
        if (sum === 0) {
          result.push([nums[left], nums[right], nums[i]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else right--;
      }
    }
    return result;
  }
}