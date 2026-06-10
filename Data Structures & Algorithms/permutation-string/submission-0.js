class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  /* checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;
    let count = 0; // 满足的个数
    const map1 = new Map(), // 需要的
      window = new Map(); // 有的

    // 记录窗口需要哪些字母
    for (let right = 0; right < s1.length; right++) {
      map1.set(s1[right], (map1.get(s1[right]) ?? 0) + 1);
    }

    for (let left = 0; left < s2.length; left++) {
      if (!map1.has(s2[left])) continue;
      for (
        let right = left;
        right - left < s1.length && right < s2.length;
        right++
      ) {
        if (map1.has(s2[right])) {
          window.set(s2[right], (window.get(s2[right]) ?? 0) + 1);
          if (window.get(s2[right]) > map1.get(s2[right])) break;
          else if (window.get(s2[right]) === map1.get(s2[right])) count++;

          if (count === map1.size) return true;
        }
      }
    }

    return false;
  } */

  checkInclusion(s1 = "", s2 = "") {
    if (s1.length > s2.length) return false;
    s1 = s1.split("").sort().join("");
    s2 = s2.split("");

    for (let left = 0; left < s2.length; left++) {
      if (
        s2
          .slice(left, left + s1.length)
          .sort()
          .join("") === s1
      )
        return true;
    }
    return false;
  }
}