import { CardType } from '@/data'
import { MouseEventHandler, ReactNode } from 'react'

export interface CardProps {
  title: string
  name: string
  clickHandler?: MouseEventHandler<HTMLLIElement>
  children?: ReactNode
  type?: CardType
}

export interface RadioGroupOption {
  id: string
  name: string
  value: string
  label: string
}
export interface MeasureData {
  name: string
  placeholder: string
}

export interface UserData {
  goal: {
    lose: boolean
    gain: boolean
    health: boolean
    stressRelief: boolean
  }
  measure: {
    [key: string]: {
      [key: string]: string
      height: string
    }
  }
  behavior: {
    restLack: boolean
    sweet: boolean
    soda: boolean
    salt: boolean
    snacks: boolean
    none: boolean
  }
  activity: {
    none: boolean
    low: boolean
    average: boolean
    active: boolean
  }
}
