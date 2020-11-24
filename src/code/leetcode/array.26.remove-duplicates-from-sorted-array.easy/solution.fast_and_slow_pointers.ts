import { Solution } from '@/pojo/Solution';

function removeDuplicates(nums: number[]): number {
  let p_fast = 0;
  let p_slow = 0;
  for (p_slow; p_slow < nums.length; p_slow ++) {
    /** find next different element */
    while(nums[p_fast] === nums[p_slow]) {
      p_fast ++;
    }
    /** [1]. p_fast go end */
    if (p_fast === nums.length) {
      return p_slow + 1;
    }
    /** [2]. not reach end
     * [0,.......,p_slow,...., p_fast,....]
     *  ^         ^            ^
     *  |  result | duplicated | remains..|
     */
    nums[p_slow + 1]= nums[p_fast]; /** p_slow expand by + 1, swap with p_fast value */
  }
  return p_slow + 1; /** result nums is [0, p_slow], where length of result is p_slow + 1 */
}

export default Solution.create(
  removeDuplicates,
  [
    [1,2,3,3,3,3,3,3,4,4,5,6]
  ],
);