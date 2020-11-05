import { routeMeta } from "../web/router/RouteMeta";

export function generateTag(string): string[] {
  return ['tag', 'tag2'];
}

export function generateName(string): string {
  return 'title';
}

export function generateIndex(string): string {
  return 'index';
}

export function generateLevel(string): string {
  return 'level';
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