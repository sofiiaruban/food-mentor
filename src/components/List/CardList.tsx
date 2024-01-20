import { FC, MouseEventHandler } from 'react'

import Card from './Card/Card'
import { CardProps } from '@/types/types'
import styles from './CardList.module.scss'
import CardLink from './Card/CardLink'
import { CardType } from '@/data'
import classnames from 'classnames'

interface CardListProps {
  cardList: Array<CardProps>
  clickHandler?: MouseEventHandler<HTMLLIElement>
  isLink?: boolean
  url?: string
  type?: CardType
}

const CardList: FC<CardListProps> = ({ cardList, isLink, url, type }) => {
  const listClasses = classnames(styles.list, {
    [styles['list-activity']]: type === CardType.ACTIVITY
  })
  return (
    <ul className={listClasses}>
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
