class Solution {
  minEatingSpeed(piles, h) {
    let left = 1;                        // 最慢：每小时吃 1 个
    let right = Math.max(...piles);      // 最快：每小时吃最大堆（1小时吃完任何堆）

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      const hours = this.getHours(piles, mid);

      if (hours <= h) {
        // 吃得完 → 尝试更慢的速度
        right = mid;
      } else {
        // 吃不完 → 加快速度
        left = mid + 1;
      }
    }

    return left;
  }

  // 计算以速度 k 吃完所有堆需要多少小时
  getHours(piles, k) {
    let hours = 0;
    for (const pile of piles) {
      hours += Math.ceil(pile / k);
    }
    return hours;
  }
}