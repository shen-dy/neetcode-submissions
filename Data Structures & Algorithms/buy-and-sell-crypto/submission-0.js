class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    const dp = Array.from({ length: prices.length }, () =>
      new Array(2).fill(0),
    );
    dp[0][0] = 0; //没东西
    dp[0][1] = -prices[0]; // 有东西
    for (let i = 1; i < prices.length; i++) {
      dp[i][0] = Math.max(prices[i] + dp[i - 1][1], dp[i - 1][0]);
      dp[i][1] = Math.max(-prices[i], dp[i - 1][1]);
    }
    return Math.max(...dp.at(-1));
  }
}