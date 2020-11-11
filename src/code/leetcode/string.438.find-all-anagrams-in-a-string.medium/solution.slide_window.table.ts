import { Solution } from '@/pojo/Solution';

function findAnagrams(s: string, p: string): number[] {
  let slen = s.length;
  let plen = p.length;

  function isAnagram(currentSTable: number[], pTable: number[]) {
    for(let i = 0; i < pTable.length; i++){
      // console.log(i, currentSTable[i], pTable[i])
      if(currentSTable[i] !== pTable[i]){
        return false;
      }
    }
    return true;
  }

  let result = [];

  /** each character showing times */
  let sTable = new Array(26).fill(0);
  let pTable = new Array(26).fill(0);

  /** init p table */
  for(let i = 0; i < plen; i++){
    sTable[s.charCodeAt(i) - 97]++;
    pTable[p.charCodeAt(i) - 97]++;
  }

  /** traverse each plen in s */
  for(let i = 0; i < slen; i++){
    if(isAnagram(sTable, pTable)){
      result.push(i)
    }
    /** slide low */
    sTable[s.charCodeAt(i) - 97] --;
    /** slide high */
    sTable[s.charCodeAt(i + plen) - 97] ++;
  }

  return result;
}

export default Solution.create(
  findAnagrams,
  // ["abab", "ab"]
  // ["b", "z"],
  // ["baab", "aab"],
  // ["cbaebabacd", "cba"],
  // ["abcsadsawriohasciabcbacab", "abc"]
  ["acdcaeccde","c"]
);