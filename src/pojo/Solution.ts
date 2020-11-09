const SolutionWrapper = {
  create: (func: Function, params: any[], content:Configs|null = null) => {
    return new Solution(func, params, content);
  }
}

interface Configs {
  outputType?: RESULT_TYPE;
  inputType?: INPUT_TYPE;
}

class Solution {
  solution: Function;
  params: any[];
  configs: object;

  constructor(func: Function, params: any[], content: Configs|null) {
    this.solution = func;
    this.params = params;
    this.configs = content;
  }

  setSolution(solution: Function) {
    this.solution = solution;
  }
}

enum RESULT_TYPE {
  POINTER,
  TREE,
}

enum INPUT_TYPE {
  MUTABLE,
}

export {
  SolutionWrapper as Solution,
  RESULT_TYPE,
  INPUT_TYPE,
};