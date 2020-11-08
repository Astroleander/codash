const SolutionWrapper = {
  create: (func: Function, params: any[], content = null) => {
    return new Solution(func, params, content);
  }
}

class Solution {
  solution: Function;
  params: any[];

  constructor(func: Function, params: any[], content: {}|null) {
    this.solution = func;
    this.params = params;
  }

  setSolution(solution: Function) {
    this.solution = solution;
  }
}

export {
  SolutionWrapper as Solution
};