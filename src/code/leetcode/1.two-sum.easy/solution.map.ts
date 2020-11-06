import { Solution } from '../../../web/pojo/Solution';

function twoSum(nums: number[], target: number): number[] {
  /** 
   * 创建一个新的 kv 对象 {
   *   k(我要找谁){number}: v(我是谁){index}
   * }
   * 然后对每个元素先校验是否已经在对象组里有 key 值即可 (有key值表示配对成功)
   */
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    /** check first */
    if (Number.isInteger(result[num])) return [result[num], i]
    /** if do not have match pair, go next */
    result[target - num] = i;
  }

  /** Leetcode compile rules require return type check*/
  return [0, 0];
};

export default Solution.create(twoSum, [
  [3,1,3,5],
  6
]);