class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    const targetMap = new Map();
    const windowMap = new Map();
    let count = 0;

    for (const c of s1) targetMap.set(c, (targetMap.get(c) ?? 0) + 1);

    for (let i = 0; i < s1.length; i++) {
      const c = s2[i];
      windowMap.set(c, (windowMap.get(c) ?? 0) + 1);
      if (windowMap.get(c) === targetMap.get(c)) count++;
    }

    if (count === targetMap.size) return true;

    for (let i = s1.length; i < s2.length; i++) {
      const right = s2[i],
        left = s2[i - s1.length];

      if (windowMap.get(left) === targetMap.get(left)) count--;
      windowMap.set(left, (windowMap.get(left) ?? 0) - 1);
      windowMap.set(right, (windowMap.get(right) ?? 0) + 1);
      if (windowMap.get(right) === targetMap.get(right)) count++;

      if (count === targetMap.size) return true;
    }

    return false;
  }
}