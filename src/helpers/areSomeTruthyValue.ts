export const areSomeTruthyValue = (obj: Record<string, boolean>): boolean => {
  return Object.values(obj).some((value) => value === true)
}
