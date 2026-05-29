class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const prevProduct = new Array(nums.length),
      suffixProduct = new Array(nums.length),
      result = new Array(nums.length);

    prevProduct[0] = nums[0];
    suffixProduct[nums.length - 1] = nums.at(-1);

    for (let i = 1; i < nums.length; i++) {
      prevProduct[i] = prevProduct[i - 1] * nums[i];
    }
    for (let i = nums.length - 2; i >= 0; i--) {
      suffixProduct[i] = suffixProduct[i + 1] * nums[i];
    }

    result[0] = suffixProduct[1];
    result[nums.length - 1] = prevProduct[nums.length - 2];

    for (let i = 1; i < nums.length - 1; i++) {
      result[i] = prevProduct[i - 1] * suffixProduct[i + 1];
    }

    return result;
  }
}