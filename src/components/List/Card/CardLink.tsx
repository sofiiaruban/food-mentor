import { Link } from 'react-router-dom'
import Card from './Card'
import { FC } from 'react'
import { CardProps } from '@/types/types'
import { CardType } from '@/data'

interface CardLinkProps extends CardProps {
  url: string
}

const CardLink: FC<CardLinkProps> = ({
  url,
  name,
  children,
  title,
  type = CardType.GOAL
}) => {
  return (
    <Link to={url}>
      <Card
        title={title}
        type={type}
        children={children}
        name={name}
      />
    </Link>
  )
}

export default CardLink
