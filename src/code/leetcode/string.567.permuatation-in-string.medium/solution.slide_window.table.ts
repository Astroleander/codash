import { Solution } from '@/pojo/Solution';

/** notice, s1 and s2 is reverse to 438 */
function checkInclusion(s1: string, s2: string): boolean {
  let s1_len = s1.length;
  let s2_len = s2.length;

  const isPermutation = (s1_table: number[], s2_table: number[]) => {
    // console.log(s1_table, s2_table)
    for (let i = 0; i < 26; i++) {
      if(s1_table[i] !== s2_table[i]) return false;
    }
    return true;
  }

  const s1_table = new Array(26).fill(0);
  const s2_table = new Array(26).fill(0);

  /** 
   * [ Q: why x - 97 ]
   * [ A: in ascii, "a" is 97 ] 
   */

   /** 注意初始化时的逻辑, 我们的目的是
    * 1. 初始化 s1_table
    * 2. 以 s1 的长度初始化 s2 的窗口
    */
  for (let i = 0; i < s1_len; i++) {
    s1_table[s1.charCodeAt(i) - 97] ++;
    s2_table[s2.charCodeAt(i) - 97] ++;
  }

  let result = false;
  for (let i = 0; i < s2_len; i++) {
    // console.log(isPermutation(s1_table, s2_table))
    if (isPermutation(s1_table, s2_table)) return true;
    /** shift window + 1 */
    s2_table[s2.charCodeAt(i) - 97] --;
    s2_table[s2.charCodeAt(i + s1_len) - 97] ++;
  }
  return false;
};

export default Solution.create(
  checkInclusion,
  // ["abab", "ab"]
  // ["b", "z"],
  // ["baab", "aab"],
  // ["cbaebabacd", "cba"],
  // ["abcsadsawriohasciabcbacab", "abc"]
  ["ccdeas","acdcaeccde"]
);