class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    strs.unshift(strs.length);
    return strs.join("#=");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const splitted = str.split("#=");
    return splitted[0] === 0 ? [] : splitted.slice(1, splitted[0] + 1);
  }
}