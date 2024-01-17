import { FC } from 'react'
import Icon from './Icon'
import lose from '../assets/lose-img.svg'
import gain from '../assets/gain-img.svg'
import developLeft from '../assets/develop-left.svg'
import developRight from '../assets/develop-right.svg'
import GoalCard from './GoalCard'

//can move  this list to diff file?
const goalsList = [
  {
    title: 'Lose Weight',
    children: <Icon src={lose} width={85} height={172} />
  },
  {
    title: 'Gain Muscle',
    children: <Icon src={gain} width={134} height={180} />
  },
  {
    title: 'Develop healthy habits',
    children: <Icon src={developLeft} width={81} height={168} />
  },
  {
    title: 'Develop healthy habits',
    children: <Icon src={developRight} width={102} height={172} />
  }
]

const GoalsCardList: FC = () => {
  return (
    <ul>
      {goalsList.map((goal, index) => (
        <GoalCard
          title={goal.title}
          key={`${goal.title}${index}`}
          children={goal.children}
        />
      ))}
    </ul>
  )
}

export default GoalsCardList
