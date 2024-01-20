import { UserData } from '@/types/types'

export const updateMeasureData = (
  userData: UserData,
  unit: string,
  name: string,
  value: string
): UserData => {
  return {
    ...userData,
    measure: {
      ...userData.measure,
      [unit]: {
        ...userData.measure[unit],
        [name]: value
      }
    }
  }
}
