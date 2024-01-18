import { FC } from 'react'

import Card from './components/Card'
import { CardProps } from '@/types/types'

interface CardListProps {
  cardList: Array<CardProps>
}

const CardList: FC<CardListProps> = ({ cardList }) => {
  return (
    <ul>
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
