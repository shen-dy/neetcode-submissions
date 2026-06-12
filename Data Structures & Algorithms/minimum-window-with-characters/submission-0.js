class Solution {
  minWindow(s, t) {
    if (t.length > s.length) return "";

    const target = new Map();
    const window = new Map();
    let matchCount = 0;
    let left = 0;
    let minLen = Infinity,
      minLeft = 0;

    for (const c of t) target.set(c, (target.get(c) ?? 0) + 1);

    for (let right = 0; right < s.length; right++) {
      // 右边进入
      if (target.has(s[right])) {
        window.set(s[right], (window.get(s[right]) ?? 0) + 1);
        if (window.get(s[right]) === target.get(s[right])) matchCount++;
      }

      // 满足条件 → 收缩左边界
      while (matchCount === target.size) {
        // 更新最小窗口
        if (right - left + 1 < minLen) {
          minLen = right - left + 1;
          minLeft = left;
        }

        // 左边离开
        if (target.has(s[left])) {
          if (window.get(s[left]) === target.get(s[left])) matchCount--;
          window.set(s[left], window.get(s[left]) - 1);
        }
        left++;
      }
    }

    return minLen === Infinity ? "" : s.substring(minLeft, minLeft + minLen);
  }
}