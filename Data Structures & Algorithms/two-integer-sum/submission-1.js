class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
      const needNum = target - nums[i];
      if (map[needNum] !== undefined) return [map[needNum], i];
      map[nums[i]] = i;
    }
  }
}