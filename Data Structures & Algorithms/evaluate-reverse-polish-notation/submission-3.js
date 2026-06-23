class Solution {
  evalRPN(tokens) {
    const stack = [];

    for (const token of tokens) {
      if (isNaN(Number(token))) {
        // 运算符：弹出栈顶两个数
        const right = stack.pop(); // 后弹出的做右操作数
        const left = stack.pop(); // 先弹出的做左操作数
        let ans;
        switch (token) {
          case "+":
            ans = left + right;
            break;
          case "-":
            ans = left - right;
            break;
          case "*":
            ans = left * right;
            break;
          case "/":
            ans = Math.trunc(left / right);
            break; // 向零取整
        }
        stack.push(ans);
      } else {
        stack.push(Number(token)); // 入栈时就转数字
      }
    }

    return stack[0];
  }
}