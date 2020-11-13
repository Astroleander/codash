import { Solution } from '@/pojo/Solution';

function isPowerOfTwo(n: number): boolean {
  if (n <= 0) return false;
  /** judge by bit symbol "1" count */
  while (!(n % 2)) {
    n >>= 1;
  }
  if (n === 1) return true;
  return false;
};

export default Solution.create(
  isPowerOfTwo,
  [1]
)