import { FC } from 'react'
import Paragraph from '../../Typography/Paragraph'
import { CardProps } from '@/types/types'
import { CardType } from '@/data'
import styles from './Card.module.scss'
import classnames from 'classnames'

const Card: FC<CardProps> = ({ children, title, type = CardType.GOAL }) => {
  const cardClasses = classnames(styles.card, styles[`card-${type}`])

  return (
    <li className={cardClasses}>
      <Paragraph title={title} />
      {children}
    </li>
  )
}

export default Card
