class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  maxSlidingWindow(nums, k) {
    const res = [];
    const deque = [];

    for (let i = 0; i < nums.length; i++) {
      if (deque[0] <= i - k) deque.shift(); // 长度超过窗口
      while (deque.length && nums[deque.at(-1)] < nums[i]) deque.pop(); // 把小于新入栈的元素都弹出 维持单调
      deque.push(i);
      if (i >= k - 1) res.push(nums[deque[0]]);
    }
    return res;
  }
}