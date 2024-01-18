import { FC } from 'react'

import Card from './Card/Card'
import { CardProps } from '@/types/types'
import styles from './CardList.module.scss'
import CardLink from './Card/CardLink'

interface CardListProps {
  cardList: Array<CardProps>
  isLink: boolean
  url: string
}

const CardList: FC<CardListProps> = ({ cardList, isLink, url }) => {
  return (
    <ul className={styles.list}>
      {cardList.map((card, index) =>
        isLink ? (
          <CardLink
            url={url}
            title={card.title}
            key={`${card.title}${index}`}
            children={card.children}
          />
        ) : (
          <Card
            title={card.title}
            key={`${card.title}${index}`}
            children={card.children}
          />
        )
      )}
    </ul>
  )
}

export default CardList
