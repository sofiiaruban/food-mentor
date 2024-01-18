import { FC } from 'react'
import Paragraph from '../../typography/Paragraph'
import { CardProps } from '@/types/types'


const Card: FC<CardProps> = ({ children, title, type}) => {
  return (
    <li>
      <Paragraph title={title} />
      {children}
    </li>
  )
}

export default Card
