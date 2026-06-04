class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let left = 0,
      right = s.length - 1;
    const ACode = "A".charCodeAt();
    const zCode = "z".charCodeAt();
    const code0 = "0".charCodeAt();
    const code9 = "9".charCodeAt();

    const isValid = (char) => {
      const code = char.charCodeAt();
      if ((code >= ACode && code <= zCode) || (code >= code0 && code <= code9))
        return true;
      return false;
    };

    while (left < right) {
      // debugger;
      while (left < s.length && left < right && !isValid(s[left])) left++;
      while (right >= 0 && left < right && !isValid(s[right])) right--;

      if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
      left++;
      right--;
    }
    return true;
  }
}