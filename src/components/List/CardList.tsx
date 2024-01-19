import { FC, MouseEventHandler } from 'react'

import Card from './Card/Card'
import { CardProps } from '@/types/types'
import styles from './CardList.module.scss'
import CardLink from './Card/CardLink'
import { CardType } from '@/data'

interface CardListProps {
  cardList: Array<CardProps>
  clickHandler?: MouseEventHandler<HTMLLIElement>
  isLink?: boolean
  url?: string
  type?: CardType
}

const CardList: FC<CardListProps> = ({
  cardList,
  isLink,
  url,
  type,
}) => {
  return (
    <ul className={styles.list}>
      {cardList.map((card, index) =>
        isLink && url ? (
          <CardLink
            url={url}
            name={card.name}
            title={card.title}
            key={`${card.title}${index}`}
            children={card.children}
          />
        ) : (
          <Card
            title={card.title}
            key={`${card.title}${index}`}
            children={card.children}
            type={type}
            name={card.name}
          />
        )
      )}
    </ul>
  )
}

export default CardList
