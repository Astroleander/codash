```ts
  for (p_slow; p_slow < len; p_slow++) {
    while (nums[p_slow] === nums[p_fast]) {
      p_fast ++; /** fast++ until next element not equal to slow */
    }
    /** ↓ after moving */
    if (p_fast === len) {
      return p_slow + 1; /** [1] */
    }
    nums[p_slow + 1] = nums[p_fast]; /** [2] */
  }
  return p_slow + 1; /** [3] */
```

注意, `[1]`,`[2]`,`[3]` 处 p_slow + 1 的原因。
+ 对于 `[1]`,`[3]` 而言, 题干里要求返回的是 `length`, 而 `p_slow` 是下标, 所以 +1
+ 对于 `[2]` 而言, `p_slow` 记录的是当前用于比较的值, 已经存在于新数组中, 对于数组里的下一个值, 应当是 `p_slow++`