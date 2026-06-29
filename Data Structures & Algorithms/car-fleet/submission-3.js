class Solution {
  carFleet(target, position, speed) {
    const n = position.length;
    if (n === 0) return 0;

    // 计算到达时间并排序（位置从远到近）
    const cars = position
      .map((p, i) => [p, (target - p) / speed[i]])
      .sort((a, b) => b[0] - a[0]);

    let fleets = 1;
    let prevTime = cars[0][1];

    for (let i = 1; i < n; i++) {
      const curTime = cars[i][1];
      // 当前车更慢 → 追不上前面的车队 → 新车队
      if (curTime > prevTime) {
        fleets++;
        prevTime = curTime;
      }
      // 否则被前面的车队追上，合并，不增加
    }

    return fleets;
  }
}