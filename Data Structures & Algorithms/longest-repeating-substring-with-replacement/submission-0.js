class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    const map = new Map();
    let mostChar = 0,
      result = 0,
      left = 0;

    for (let right = 0; right < s.length; right++) {
      map.set(s[right], (map.get(s[right]) ?? 0) + 1);
      mostChar = Math.max(mostChar, map.get(s[right]));

      if (right - left + 1 - mostChar > k) {
        map.set(s[left], map.get(s[left]) - 1);
        left++;
      }
      result = Math.max(result, right - left + 1);
    }
    return result;
  }
}