import { Solution, RESULT_TYPE } from '@/pojo/Solution';

function removeDuplicates(nums: number[]): number {
  const len = nums.length;
  let p_fast = 0; /** p_fast -> looking for next different*/
  let p_slow = 0; /** p_slow -> current result array last */
  for (p_slow; p_slow < len; p_slow++) {
    while (nums[p_slow] === nums[p_fast]) {
      p_fast ++; /** fast++ until next element not equal to slow */
    }
    /** ↓ after moving */
    if (p_fast === len) {
      return p_slow + 1; /** [1] */
    }
    nums[p_slow + 1] = nums[p_fast]; /** [2] */
  }
  return p_slow + 1; /** [3] */
};

export default Solution.create(
  removeDuplicates,
  [
    [0,0,1,1,1,2,2,3,3,4]
  ],
  {
    outputType: RESULT_TYPE.POINTER
  }
)