class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  maxSlidingWindow(nums, k) {
    const window = nums.slice(0, k);
    const res = new Array(nums.length - k + 1);
    res[0] = Math.max(...window);

    for (let left = 1; left <= nums.length - k; left++) {
      const right = left + k - 1;
      // 维护window
      window.push(nums[right]);
      const shiftNum = window.shift();
      let max = res[left - 1];

      if (nums[right] >= max) {
        // 新增的比最大的大 替换
        max = nums[right];
      } else if (max === shiftNum) {
        //最大值被弹出，重新找最大值
        max = Math.max(...window);
      }
      res[left] = max;
    }
    return res;
  }
}