class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    const map = new Map();
    for (let i = 0; i < numbers.length; i++) {
      const n = numbers[i];
      const diff = target - n;
      if (map.has(diff)) return [map.get(diff) + 1, i + 1];
      map.set(n, i);
    }
    return [0, 0];
  }
}