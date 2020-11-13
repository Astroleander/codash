import { Solution } from '@/pojo/Solution';

function characterReplacement(s: string, k: number): number {
  const count = new Array(26).fill(0);

  let p_low = 0, p_high = 0;
  let max = 0, max_len = 0;
  while (p_high < s.length) {
    /** slide high */
    console.log(s.slice(p_low, p_high + 1), count, max)
    let c_idx = s.charCodeAt(p_high) - 65;
    count[c_idx] ++;
    if (count[c_idx] > max) max = count[c_idx];

    /** slide right */
    if (p_high - p_low + 1 - max> k){
      count[s.charCodeAt(p_low) - 65] --;
      p_low ++;
    }

    /** we don't care the window at last, cause of we never shrink the window */
    if (p_high - p_low + 1 > max_len ) max_len = p_high - p_low + 1;
    p_high ++;
  }
  return max_len
};

export default Solution.create(
  characterReplacement,
  [
    "AVAXAFZXHZUIXHA", 2
  ]
)