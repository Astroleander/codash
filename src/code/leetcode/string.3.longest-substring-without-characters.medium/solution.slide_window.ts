import { Solution } from '@/pojo/Solution';

function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;
  const len = s.length;

  /** [p_low, p_high + 1) */
  let p_low = 0, p_high = 0;

  let max = 1;
  const set = new Set();

  while (p_high < len) {
    /** each time slide low, we need clear up set space */
    while (set.has(s[p_high])) {
      set.delete(s[p_low]);
      p_low ++;
    }
    /** left slide */
    set.add(s[p_high]);
    if (p_high + 1 - p_low > max) max = p_high + 1 - p_low;
    /** next turn */
    p_high++;
  }
  return max;
};

export default Solution.create(
  lengthOfLongestSubstring, 
  // ["1"],
  // ['ab'],
  // ['aa'],
  // [ 'ccc' ]
  // ['bbbbbbb'],
  // ["abcabcbb"],
  // ["1234"],
  ['pwwkew'],
  // ['abba'],
)