import { CardType } from '@/data'
import { ReactNode } from 'react'

export interface CardProps {
  title: string
  children?: ReactNode
  type?: CardType
}
