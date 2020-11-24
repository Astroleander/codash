import { Solution } from '@/pojo/Solution';

function threeSum(nums: number[]): number[][] {
  nums.sort((a,b) => a - b);

  let result = [];
  let twoSum = 0;
  let low, high;
  /** for a+b+c = sum */
  for (let i = 0; i < nums.length; i++) {
    /** figrue out all a */
    /** skip repeat element */
    while (i > 0 && nums[i - 1] === nums[i]) i++;

    twoSum = nums[i];
    low = i + 1; high = nums.length - 1;

    while (low < high) {
      if (nums[low] + nums[high] === -twoSum) {
        result.push([nums[low], nums[high], twoSum]);
        low ++;
        high --;

       /** skip repeat element */
        while (low < high && nums[low] === nums[low - 1]) {
          low ++;
        }
        while (low < high && nums[high] === nums[high + 1]) {
          high --;
        }
      } else if (nums[low] + nums[high] > -twoSum) {
        /** a + b + c > 0 */
        high --;
      } else {
        low ++
      }
    }
  }
  return result
};

export default Solution.create(
  threeSum,
  [
    [1, 4, -3, -2, 2, 0, 1, -1, -5, 4]
    // [0, 0, 0]
  ],
);