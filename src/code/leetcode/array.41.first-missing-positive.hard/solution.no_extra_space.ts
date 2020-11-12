import { INPUT_TYPE, Solution } from '@/pojo/Solution';

function firstMissingPositive(nums: number[]): number {
  let len = nums.length;
  let i;
  let idx, max = 0;
  /** first iteration - find and figure out all negative */
  for (i = 0; i < len; i++) {
    if (nums[i] <= 0) {
      nums[i] = Infinity;
    }
  }

  /** second iteration - set elements accessed to negative */
  for (i = 0; i < len; i++) {
    idx = Math.abs(nums[i]);
    if (nums[i] !== undefined && idx <= len) {
      nums[idx] = -Math.abs(nums[idx]);
      /** max: the maximum idx we have visited */
      if (idx > max) { max = idx; }
    }
  }

  /** third iteration - if nums[i] > 0, meaning that it never been visited */
  /** start for 0, we don't care did 0 been visited */
  for (i = 1; i < len; i++) {
    if (nums[i] > 0) return i;
  }
  /** else, all index has been visited -
   *  there are two case:
   *  [0, 1, 2] -> 3
   *  [1, 2, 3] -> 4
   *  output value are equal to the maximum idx + 1
   *
   */
  return max + 1;
}

export default Solution.create(firstMissingPositive, [
  // [0],
  // [0,2,3,4,5,6,7,8,1,0,0,0,-1,-4,31,-4,9,-10,-11,12],
  // [0, 1, 2, 3, 4, 5]
  [2]
],{
  inputType: INPUT_TYPE.MUTABLE
});