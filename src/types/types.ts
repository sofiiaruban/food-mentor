import { CardType } from '@/data'
import { ReactNode } from 'react'

export interface CardProps {
  title: string
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
