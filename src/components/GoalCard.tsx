import { FC, ReactNode } from 'react'
import Paragraph from './typography/Paragraph'

interface GoalCardProps {
  children?: ReactNode
  title: string
}
const GoalCard: FC<GoalCardProps> = ({ children, title }) => {
  return (
    <li>
      <Paragraph title={title} />
      {children}
    </li>
  )
}

export default GoalCard
