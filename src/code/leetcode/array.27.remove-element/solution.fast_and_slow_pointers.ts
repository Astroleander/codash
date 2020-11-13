import { Solution, RESULT_TYPE } from '@/pojo/Solution';

function removeElement(nums: number[], target: number): number {
  if (nums.length === 0) return 0;
 
  let p_slow = 0;
  for (let p_fast = 0, tmp; p_fast < nums.length; p_fast++) {
    if (nums[p_fast] !== target) {
     if (p_fast !== p_slow) {
       tmp = nums[p_fast];
       nums[p_fast] = nums[p_slow];
       nums[p_slow] = tmp;
       p_slow++;
     } else {
       p_slow++;
     }
    }
  }
  return p_slow;
 };

 export default Solution.create(removeElement, [[3,2,1,2,1,3,2,1], 3], {
   outputType: RESULT_TYPE.POINTER
 });