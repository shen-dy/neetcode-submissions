class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let result = 0,
      left = 0,
      right = heights.length - 1;

    while (left < right) {
      const area = Math.min(heights[left], heights[right]) * (right - left);
      result = Math.max(result, area);
      if (heights[left] < heights[right]) left++;
      else right--;
    }
    return result;
  }
}