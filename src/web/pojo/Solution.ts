const SolutionWrapper = {
  create: (func: Function, params: any[]) => {
    return new Solution(func, params);
  }
}

class Solution {
  solution: Function;
  params: any[];

  constructor(func: Function, params: any[]) {
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