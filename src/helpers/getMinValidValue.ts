export const getMinValidValue = (
  unit: string,
  defaultUnit: string,
  minValue: number,
  conversionFactor: number
): number => {
  return unit === defaultUnit
    ? minValue
    : Math.trunc(minValue * conversionFactor)
}
