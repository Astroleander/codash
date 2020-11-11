import { Solution } from '@/pojo/Solution';

function findAnagrams(s: string, p: string): number[] {
  /** this is not a good way => object remove/add new element is very very expensive */
  if (!s) return [];
  const result = [];
  let p_set: {
    [propName: string]: number
  } = {};
  /** reset p_set */
  const slen = s.length;
  const plen = p.length;

  const resetPSet = () => {
    p_set = {};
    for (let i = 0; i < plen; i++) {
      if(p_set[p[i]]) {
        p_set[p[i]] ++;
      } else {
        p_set[p[i]] = 1;
      }
    };
  } 
  resetPSet();
  let s_low = 0, s_high = 0;
  let anagram = true;
  while (s_high < slen) {
      /** when len not enough, window high expand */
      while (s_high + 1 - s_low < plen) {
        s_high++;
      }
      /** check set no repeat */
      // console.log(p_set)
      for (let i = s_low; i < s_high + 1; i++) {

        if (p_set[s[i]]) {
          p_set[s[i]] --;
        } else {
          anagram = false;
        }
      }
      // console.log(p_set, s.substring(s_low, s_high + 1), anagram)
      /** check each p has appeared */
      if (anagram) {
        for (let i = 0; i < plen; i++) {
          if (p_set[p[i]]) anagram = false;
        };  
      }

      if (anagram) {
        result.push(s_low);
      }
      /** rest p set */
      resetPSet();

      s_low++;
      anagram = true;
  }
  return result;
};


export default Solution.create(
  findAnagrams,
  // ["abab", "ab"]
  // ["b", "z"],
  // ["baab", "aab"],
  // ["cbaebabacd", "cba"],
  // ["abcsadsawriohasciabcbacab", "abc"]
  ["acdcaeccde","c"]
);