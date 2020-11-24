import { Solution } from '@/pojo/Solution';

function maxTurbulenceSize(arr: number[]): number {
  let max = 1;
  /**
   * →  : 
   * ↗ : 
   *  LAST 
   * ↘ :
   *  LAST 
   */
  let last_k, k;
  for (let high = 1, low = 0; high < arr.length; high ++) {
    k = arr[high] > arr[high -1] ? 1 : arr[high] === arr[high - 1] ? 0 : -1;
    if (k !== 0) {
      if (last_k && last_k === k) {
        low = high - 1;
      }
    } else {
      low = high;
    }
    last_k = k;
    // console.log(k, arr.slice(low, high+1))
    max = Math.max(max, high - low + 1);
  }
  return max;
}
export default Solution.create(
  maxTurbulenceSize,
  [
    [1]
    // [1,2,3,4,3,4,4,3]
    // [3,4,3,4]
    // [2,2,2,2,2,3,2,3]
    // [2,32,2]
    // [2, 4, 24],
    // [12, 4, 24, 2]
    // [9,4,2,10,7,8,8,1,9]
    // [2, 2, 2]
  ],
);