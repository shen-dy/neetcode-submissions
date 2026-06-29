/* 有 n 辆汽车在一条单车道高速公路上驶向同一个目的地。
你有两个整数数组 position 和 speed，长度均为 n。
position[i] 是第 i 辆车的位置（单位：英里）  
speed[i] 是第 i 辆车的速度（单位：每小时英里）  
目的地位于 target 英里的位置。
汽车不能在前方的车前面通过。它只能追上另一辆车，然后以与前车相同的速度行驶。
车队是一个非空的汽车集合，其中所有汽车位于相同位置且以相同速度行驶。单个汽车也可被视为一个车队。
如果一辆车在车队到达目的地的那一刻追上车队，那么这辆车就被视为属于该车队的一部分。
返回到达目的地的不同汽车车队的数量。 */
class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, position, speed) {
    let res = 0,
      prevTime = 0; // 前一辆车到终点的需要的时间
    const cars = position
      .map((p, idx) => [p, speed[idx]])
      .sort((a, b) => b[0] - a[0]);

    res++;
    prevTime = (target - cars[0][0]) / cars[0][1];

    for (let i = 1; i < cars.length; i++) {
      const [p, s] = cars[i];
      const curTarget = target - p;
      const curTime = curTarget / s;

      if (s * prevTime < curTarget) {
        res++;
        prevTime = curTime;
      }
    }
    return res;
  }
}