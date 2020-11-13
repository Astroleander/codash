import { Solution } from '@/pojo/Solution';

function minSubArrayLen(s: number, nums: number[]): number {
  let p_low = 0, p_high = -1;
  let sum = 0, count = 0;
  let result_low= -1, result_high = Infinity;

  const len = nums.length;
  while (p_low < len) {
    console.log(nums.slice(p_low, p_high + 1), sum)
    if (sum >= s && count < result_high + 1 - result_low) {
      result_low = p_low;
      result_high = p_high;
    }
    /** slide high */
    if (sum < s && p_high < len) {
      p_high ++;
      sum += nums[p_high];
      count ++;
    }
    /** slide low */
    else {
      sum -= nums[p_low];
      count --;
      p_low ++;
    }
  }
  if (result_high === Infinity) return 0;
  return result_high - result_low + 1;
};

export default Solution.create(
  minSubArrayLen,
  [
    // 222, [2, 3, 1, 2, 4, 3]
    11, [1,2,3,4,5]
  ],
)