class Solution {
  maxSlidingWindow(nums, k) {
    const res = [];
    let max = Math.max(...nums.slice(0, k));
    res.push(max);

    for (let i = k; i < nums.length; i++) {
      const outNum = nums[i - k]; // 离开的
      const inNum = nums[i];      // 进入的

      if (inNum >= max) {
        max = inNum;
      } else if (outNum === max) {
        max = Math.max(...nums.slice(i - k + 1, i + 1));
      }
      res.push(max);
    }
    return res;
  }
}