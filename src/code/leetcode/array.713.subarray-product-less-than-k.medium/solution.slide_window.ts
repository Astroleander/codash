import { Solution } from '@/pojo/Solution';

function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1 ) return 0;
  let low = 0, high = 0;
  let product = 1;
  let result = 0;
  /** 
   * 在滑动窗口使用嵌套循环时要注意, 此时外部循环使用的迭代值必须在外部循环体里更新
   * 比如这里外部循环体更新的是 high, 那么外部的停止条件就不能是 low 
   */
  while (high < nums.length) {
  console.log(low, high)
  product *= nums[high];

    while (product >= k) {
      product /= nums[low];
      low++;
    }
    result += high - low + 1;
    high ++;
  }
  return result;
};

export default Solution.create(
  numSubarrayProductLessThanK,
  [
    [10, 5, 2, 6], 100
  ],
);