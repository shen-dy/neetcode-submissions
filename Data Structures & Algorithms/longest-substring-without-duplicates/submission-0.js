class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    const set = new Set();
    let result = 0,
      left = 0;
    for (let right = 0; right < s.length; right++) {
      while (set.has(s[right])) {
        set.delete(s[left++]);
      }
      result = Math.max(result, right - left + 1);
      set.add(s[right]);
    }
    return result;
  }
}