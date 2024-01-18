import { FC } from 'react'

import Card from './components/Card'
import { CardProps } from '@/types/types'
import styles from './CardList.module.scss'

interface CardListProps {
  cardList: Array<CardProps>
}

const CardList: FC<CardListProps> = ({ cardList }) => {
  return (
    <ul className={styles.list}>
      {cardList.map((card, index) => (
        <Card
          title={card.title}
          key={`${card.title}${index}`}
          children={card.children}
        />
      ))}
    </ul>
  )
}

export default CardList
