export const validateInput = (
  value: string,
  minAllowedValue: number
): boolean => {
  const numericValue = Number(value)
  return !isNaN(numericValue) && numericValue >= minAllowedValue
}
