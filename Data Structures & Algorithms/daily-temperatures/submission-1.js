class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const stack = [];
    const res = new Array(temperatures.length).fill(0);

    for (let i = temperatures.length - 1; i >= 0; i--) {
      const currentTemp = temperatures[i];

      // 压入栈
      while (stack.length && temperatures[stack.at(-1)] <= currentTemp) {
        stack.pop();
      }
      if (stack.length) res[i] = stack.at(-1) - i;
      stack.push(i);
    }
    return res;
  }
}