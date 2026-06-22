class Solution {
  rightBracket = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const stack = [];
    for (const c of s) {
      if (!(c in this.rightBracket)) stack.push(c);
      else if (stack.pop() !== this.rightBracket[c]) return false;
    }
    return stack.length === 0;
  }
}