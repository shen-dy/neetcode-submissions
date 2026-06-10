class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;
    let count = 0; // 满足的个数
    const map = new Map(), // 需要的
      window = new Map(); // 有的

    // 记录窗口需要哪些字母
    for (let right = 0; right < s1.length; right++) {
      map.set(s1[right], (map.get(s1[right]) ?? 0) + 1);
    }

    // 遍历s2，找到目标串
    for (let left = 0; left < s2.length; left++) {
      if (!map.has(s2[left])) continue;

      for (
        let right = left;
        right - left < s1.length && right < s2.length;
        right++
      ) {
        if (!map.has(s2[right])) {
          left = right;
          window.clear();
          count = 0;
          break;
        }
        // 加入right
        window.set(s2[right], (window.get(s2[right]) ?? 0) + 1);
        // 数量相等加一个
        if (window.get(s2[right]) === map.get(s2[right])) count++;

        if (count === map.size) return true;
      }
      window.clear();
      count = 0;
    }

    return false;
  }
}