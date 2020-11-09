const SolutionWrapper = {
  create: (func: Function, params: any[], content = null) => {
    return new Solution(func, params, content);
  }
}

class Solution {
  solution: Function;
  params: any[];
  configs: object;

  constructor(func: Function, params: any[], content: {}|null) {
    this.solution = func;
    this.params = params;
    this.configs = content;
  }

  setSolution(solution: Function) {
    this.solution = solution;
  }
}

enum RESULT_TYPE {
  POINTER
}

export {
  SolutionWrapper as Solution,
  RESULT_TYPE,
};