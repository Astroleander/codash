import { Solution } from '@/pojo/Solution';

function maxArea(height: number[]): number {
  let low: number = 0, high: number = height.length - 1;
  // 乘积不会为负数，初始化值用 -1 就可以保证最小
  let max = -1;
  let current_width, current_height; 
  // loop until cursor collision
  while (high > low) {
    current_width = high - low;
    if (height[low] > height[high]) {
      current_height = height[high];
      high--;
    } else {
      current_height = height[low];
      low++;
    }
    
    if (current_width * current_height > max) {
      max = current_height * current_width;
    }
  }
  return max;
};

export default Solution.create(
  maxArea,
  [
    [1, 2, 3, 4, 5, 6, 2, 3, 7]
  ]
)