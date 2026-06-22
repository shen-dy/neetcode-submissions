class MinStack {
  constructor() {
    this.stack = [];
    this.min = Infinity;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    if (val < this.min) this.min = val;
  }

  /**
   * @return {void}
   */
  pop() {
    const val = this.stack.pop();
    if (val === this.min)
      this.min = isNaN(Math.min(...this.stack))
        ? Infinity
        : Math.min(...this.stack);
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack.at(-1);
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min;
  }
}
