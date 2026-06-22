class Solution {
  maxSlidingWindow(nums, k) {
    const res = [];
    const deque = []; // 存索引，保持递减

    for (let i = 0; i < nums.length; i++) {
      // 队头超出窗口 → 移出
      if (deque[0] <= i - k) deque.shift();

      // 队尾比当前小 → 踢掉（它不可能成为最大值了）
      while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
        deque.pop();
      }

      deque.push(i);

      // 窗口形成后，队头就是最大值
      if (i >= k - 1) res.push(nums[deque[0]]);
    }

    return res;
  }
}