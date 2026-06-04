class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const set = new Set(nums);
    let result = 0;

    for (const n of set) {
      if (set.has(n - 1)) {
        continue;
      }

      let current = n;
      let length = 1;

      while (set.has(current + 1)) {
        current += 1;
        length += 1;
      }

      result = Math.max(result, length);
    }

    return result;
  }
}