import { Solution } from '@/pojo/Solution';

function firstMissingPositive(nums: number[]): number {
  const map = new Array(nums.length + 1).fill(0);
  
  for (let i = 0; i < nums.length + 1; i++) {
    if (nums[i] > 0 && nums[i] < nums.length + 1) map[nums[i]] ++;
  }

  let max = 0;
  for (let i = 1; i < map.length; i++) {
    if (map[i] === 0 ) return i;
    else max = i;
  }
  return max + 1;
}

export default Solution.create(firstMissingPositive,
  [
    // [1,1,-3,2,4,6],
    [0,1,-42,1,-2,-4,2,4,5,6,3]
  ])