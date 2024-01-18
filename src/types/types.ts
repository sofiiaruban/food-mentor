import { ReactNode } from 'react'


export interface CardProps {
  title: string
  children?: ReactNode
  type?: 'big' | 'small' | 'basic'
}
