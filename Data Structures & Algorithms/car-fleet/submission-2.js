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