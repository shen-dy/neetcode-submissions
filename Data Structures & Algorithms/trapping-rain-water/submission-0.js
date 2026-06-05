class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(heights = []) {
    // 横着计算 一层一层向上叠加
    let result = 0;
    const maxHeight = Math.max(...heights);

    for (let h = 1; h <= maxHeight; h++) {
      let left = 0;
      while (left < heights.length) {
        if (heights[left] < h) {
          left++;
          continue;
        }
        let right = left + 1;
        while (right < heights.length && heights[right] < h) right++;
        if (right < heights.length) {
          result += right - left - 1;
          left = right;
        } else {
          break;
        }
      }
    }
    return result;
  }
}