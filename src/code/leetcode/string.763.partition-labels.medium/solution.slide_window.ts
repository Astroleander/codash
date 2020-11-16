import { Solution } from '@/pojo/Solution';

function partitionLabels(S: string): number[] {
  const last = new Array(26).fill(0);

  let result = [];
  for (let i = 0; i < S.length; i ++) {
    last[S.charCodeAt(i) - 97] = i;
  }

  console.log(last)
  /** 每个窗口都是一组解, 每次输出解之后需要重置 low */
  let low = 0, high = 0;
  
  for (let cur_s_high = 0; cur_s_high < S.length; cur_s_high ++) {
    high = Math.max(last[S.charCodeAt(cur_s_high) - 97], high);

    if (high === cur_s_high) {
      result.push(high - low + 1);
      low = high + 1;
    }
  }
  return result;
};

export default Solution.create(
  partitionLabels,
  [
    "ababcbacadefegdehijhklij"
  ],
);