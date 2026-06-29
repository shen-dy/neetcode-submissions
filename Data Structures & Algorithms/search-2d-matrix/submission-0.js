class Solution {
  searchMatrix(matrix, target) {
    const m = matrix.length,
      n = matrix[0].length;
    let left = 0,
      right = m * n - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      // 一维索引 → 二维坐标
      const row = Math.floor(mid / n);
      const col = mid % n;
      const val = matrix[row][col];

      if (val === target) return true;
      if (val < target) left = mid + 1;
      else right = mid - 1;
    }

    return false;
  }
}