class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let result = 0;

    for (let left = 0; left < heights.length; left++) {
      for (let right = 0; right < heights.length; right++) {
        const area = (right - left) * Math.min(heights[left], heights[right]);
        result = Math.max(result, area);
      }
    }
    return result;
  }
}