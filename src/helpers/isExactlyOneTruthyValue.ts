export const isExactlyOneTruthyValue = (obj: Record<string, unknown>): boolean => {
  const truthyValues = Object.values(obj).filter((value) => Boolean(value));
  return truthyValues.length === 1;
};