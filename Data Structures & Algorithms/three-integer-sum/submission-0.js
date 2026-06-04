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
      for (let j = nums.length - 1; j > i + 1; j--) {
        if (j < nums.length - 1 && nums[j] === nums[j + 1]) continue;

        const target = -(nums[i] + nums[j]);
        const ans = this.binarySearch(nums, i + 1, j - 1, target);
        if (ans !== -1) result.push([nums[i], nums[ans], nums[j]]);
      }
    }
    return result;
  }

  binarySearch(nums, left, right, target) {
    while (left <= right) {
      let mid = left + ((right - left) >> 1);
      if (nums[mid] === target) return mid;
      if (nums[mid] > target) right = mid - 1;
      else left = mid + 1;
    }
    return -1;
  }
}