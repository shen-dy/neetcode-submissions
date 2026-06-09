class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let hold = -prices[0],
      sale = 0;
    for (let i = 1; i < prices.length; i++) {
      sale = Math.max(hold + prices[i], sale);
      hold = Math.max(-prices[i], hold);
    }
    return Math.max(hold, sale);
  }
}