export function findFirstOf<T>(array: T[], predicate: (item: T) => boolean): T {
  return array.find(predicate)!;
}

export function findFirstOfOrNull<T>(
  array: T[],
  predicate: (item: T) => boolean
): T | null {
  return findFirstOf(array, predicate) || null;
}
