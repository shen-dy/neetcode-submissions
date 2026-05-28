class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const map = {};

    for (const n of nums) {
      map[n] = (map[n] ?? 0) + 1;
    }
    const res = Object.entries(map)
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map((i) => Number(i[0]));
    return res;
  }
}