class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  largestRectangleArea(heights) {
    const stack = [];
    let max = 0;

    for (let i = 0; i <= heights.length; i++) {
      const height = i === heights.length ? 0 : heights[i];

      while (stack.length && heights[stack.at(-1)] > height) {
        const h = heights[stack.pop()];
        // 右边界：当前下标；左边界：取倒数第二个比当前矮的
        const w = stack.length ? i - stack.at(-1) - 1 : i;
        max = Math.max(h * w, max);
      }

      stack.push(i);
    }
    return max;
  }
}