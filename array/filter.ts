export function filterFirstOf<T>(array: T[], predicate?: (item: T) => boolean): T {
  if (predicate) return array.filter(predicate)[0];

  return array[0];
}

export function filterFirstOfOrNull<T>(
  array: T[],
  predicate?: (item: T) => boolean
): T | null {
  return filterFirstOf(array, predicate) || null;
}
