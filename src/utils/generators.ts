import { routeMeta } from "../web/router/RouteMeta";

const parseProblemFolderName = (string) => {
  const problemIndex = string.match(/\.\/(.*)\//)[1];
  const problemIndexArray = problemIndex.split(/\./);
  let classification, index, name, level;
  if (problemIndexArray.length >= 3) {
    [ classification, index, name, level ] = problemIndexArray;
  }
  return {
    classification,
    index,
    name,
    level
  };
}

export function generateTag(string): string[] {
  const result = [];
  /** capture /<xxx>.n.name/ */
  const classification = parseProblemFolderName(string).classification;
  if (classification) result.push(classification);

  /** capture solution.<xxx>.<xxx>.ts */
  const matches = string.match(/solution\.(.*)*\.ts$/);

  /** get tags */
  result.push(...matches[0].split(/\./).slice(1, -1));

  return result;
}

export function generateName(string): string {
  return parseProblemFolderName(string).name;
}

export function generateIndex(string): string {
  return parseProblemFolderName(string).index;
}

export function generateLevel(string): string {
  const level = parseProblemFolderName(string).level;
  return level ? level : 'unknown'
}

/**
 * Pure text version of list, will be replaced in future
 * @param {routeMeta} meta: route information
 * @returns a complete pure string
 */
export function generateDisplayName(meta: routeMeta): string {
  return `[${meta.tag}]` + 
         `[${meta.level}]` +
         `[${meta.index}]` +
         `${meta.name}`
}