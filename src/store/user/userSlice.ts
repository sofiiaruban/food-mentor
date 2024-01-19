import { UserData } from '@/types/types'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {
      goal: {
        lose: false,
        gain: false,
        health: false,
        stressRelief: false
      },
      measure: {
        metric: {
          weight: '',
          height: ''
        },
        imperial: {
          weight: '',
          height: ''
        }
      },
      behavior: {
        restLack: false,
        sweet: false,
        soda: false,
        salt: false,
        snacks: false,
        none: false
      },
      activity: {
        none: false,
        low: false,
        average: false,
        active: false
      }
    } as UserData
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    }
  }
})

export const { setUserData } = userSlice.actions
export const selectUserData = (state: RootState) => state.user.userData

export default userSlice.reducer
