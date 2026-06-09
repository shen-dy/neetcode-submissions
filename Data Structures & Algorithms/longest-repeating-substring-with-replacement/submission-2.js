class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    const count = new Map();
    let result = 0,
      maxFreq = 0,
      left = 0;
    for (let right = 0; right < s.length; right++) {
      count.set(s[right], (count.get(s[right]) ?? 0) + 1);
      maxFreq = Math.max(maxFreq, count.get(s[right]));
      if (right - left + 1 - maxFreq > k) {
        count.set(s[left], count.get(s[left]) - 1);
        left++;
      }
      result = Math.max(result, right - left + 1);
    }
    return result;
  }
}