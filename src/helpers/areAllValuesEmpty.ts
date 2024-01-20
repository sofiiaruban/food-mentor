export const areAllValuesEmpty = (obj: Record<string, unknown>): boolean => {
  return Object.values(obj).every((value) => value === '')
}
