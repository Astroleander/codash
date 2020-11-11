import { Solution } from '@/pojo/Solution';

function minWindow(s: string, t: string): string {
  /** 代表了窗口和判断条件不一致时的典型情况, 这时在初始化表时顺手初始化第一个条件没有意义 —— 窗口的左右边界都是分别扩张的 */
  if (s === "" || t === "") return "";
  /** [ A(65) - Z(90), a(97) - z(124)] */
  const s_table = new Array(60).fill(0);
  const t_table = new Array(60).fill(0);

  const s_len = s.length, t_len = t.length;
  /** 'count' counts all vaild input */
  let low = 0, high = -1, count = 0;
  let result_low = -1, result_high = -1, min = s_len + 1; 

  for (let i = 0; i < t_len; i++) {
    t_table[t.charCodeAt(i) - 65] ++;
  }
  while (low < s_len) {
    if (high < s_len - 1 && count < t_len) {
      /** slide high - slide first, then update table */
      high ++;
      s_table[s.charCodeAt(high) - 65] ++;
      if (s_table[s.charCodeAt(high) - 65] <= t_table[s.charCodeAt(high) -65]) {
        count ++;
      }
    } else {
      if (high - low + 1 < min && count === t_len) {
        min = high - low + 1;
        result_low = low, result_high = high;
      }

      /** slide low - delete first, then slide */
      if (s_table[s.charCodeAt(low) - 65] === t_table[s.charCodeAt(low) - 65]) {
        count --;
      }
      s_table[s.charCodeAt(low) - 65] --;
      low ++;
    }
    // console.log(s.substring(low, high + 1), count)
  }

  let result = '';
  if (min !== -1) {
    result = s.substring(result_low, result_high + 1);
  }
  return result;
};

export default Solution.create(
  minWindow,
  // ["ADOBECODEBANC", "ABC"]
  // ['a', 'a']
  // ['bbbbbbbbbbbbbbb', 'bb']
  ["gehzduwqkzuyotckqcusdiqubeqglkvuocttzrllqfjhzorpqnjwxbqyfiesscmigicfzn","qsvczwsslkhwg"]
)