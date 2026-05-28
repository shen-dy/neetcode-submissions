class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = new Map();
    for (const s of strs) {
      const key = s.split("").sort().join("");
      const value = map.get(key) ?? [];
      value.push(s);
      map.set(key, value);
    }
    return Array.from(map.values());
  }
}
