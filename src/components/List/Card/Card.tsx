import { FC, MouseEvent } from 'react'
import Paragraph from '../../Typography/Paragraph'
import { CardProps } from '@/types/types'
import { CardType } from '@/data'
import styles from './Card.module.scss'
import classnames from 'classnames'
import { selectUserData, setUserData } from '@/store/user/userSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

const Card: FC<CardProps> = ({
  children,
  title,
  name,
  type = CardType.GOAL
}) => {
  const dispatch = useAppDispatch()
  const userData = useAppSelector(selectUserData)

  const cardClasses = classnames(styles.card, styles[`card-${type}`])

  const handleCardClick = (event: MouseEvent<HTMLLIElement>) => {
    const clickedDataName = event.currentTarget?.dataset.name

    if (clickedDataName) {
      const newDataState = {
        ...userData,
        [type.toLowerCase()]: {
          ...userData[type],
          [clickedDataName]: true
        }
      }
      dispatch(setUserData(newDataState))
    }
  }
  return (
    <li className={cardClasses} data-name={name} onClick={handleCardClick}>
      <Paragraph title={title} />
      {children}
    </li>
  )
}

export default Card
