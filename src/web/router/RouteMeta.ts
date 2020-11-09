import { generateIndex, generateLevel, generateName, generateTag } from "../../utils/generators";

interface routeMeta {
  path: string,
  tag: string[],
  name: string,
  index: string,
  level: string,
};

const generateMeta = (requires, prefix) => {
  const webpackLazyLoader = requires;
  const metaList:routeMeta[] = [];
  requires.keys().forEach(key => {
    const meta: routeMeta = {
      path:   '/' + prefix + key.substring(1),
      tag:    generateTag(key),
      name:   generateName(key),
      index:  generateIndex(key),
      level:  generateLevel(key),
    }
    metaList.push(meta);
  });
  return [metaList, webpackLazyLoader ];
}

const [ routeMeta, webpackLazyLoader ] = generateMeta(require.context('/src/code/leetcode', true, /solution(\..*)?\.ts$/, 'lazy'), 'leetcode');

export { routeMeta, webpackLazyLoader };