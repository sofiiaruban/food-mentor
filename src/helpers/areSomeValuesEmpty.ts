export const areSomeValuesEmpty = (obj: Record<string, unknown>): boolean => {
  return Object.values(obj).some((value) => value === '')
}
