class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(heights = []) {
    // 横着计算 一层一层向上叠加
    let result = 0;
    let left = 0,
      right = heights.length - 1,
      leftMax = 0,
      rightMax = 0;

    while (left < right) {
      if (heights[left] < heights[right]) {
        if (heights[left] > leftMax) {
          leftMax = heights[left];
        } else {
          result += leftMax - heights[left];
        }
        left++;
      } else {
        if (heights[right] > rightMax) {
          rightMax = heights[right];
        } else {
          result += rightMax - heights[right];
        }
        right--;
      }
    }
    return result;
  }
}