import Icon from './components/Icon'
import lose from '@/assets/lose-img.svg'
import gain from '@/assets/gain-img.svg'
import developLeft from '@/assets/develop-left.svg'
import developRight from '@/assets/develop-right.svg'

export enum PrimaryTitle {
  GOAL = 'The Goal',
  MEASURE = 'Measure Yourself',
  BEHAVIOR = 'Destructive behaviors',
  ACTIVITY = 'Physical exercise'
}
export enum DescriptionTexts {
  GOAL = 'Focus on the health benefits you need. Balanced nutrition will let you achieve them',
  MEASURE = 'What are your height and body weight?',
  BEHAVIOR = 'We all have them! Which are yours?',
  ACTIVITY = 'Physical exercise means a lot for a woman who wants to lose kilos and works at the office'
}
export enum TertiaryTitle {
  GOAL = 'What are your goals?',
  ACTIVITY = 'How active are you during the day?'
}

const habitsArray = [
  "I don't rest enough",
  'I have a sweet tooth',
  'I have too much soda',
  'I eat many salty foods',
  'I enjoy midnight snacks',
  'None of the above'
]
console.log(habitsArray)

export const goalsList = [
  {
    title: 'Lose Weight',
    children: <Icon src={lose} width={85} height={172} />
  },
  {
    title: 'Gain Muscle',
    children: <Icon src={gain} width={130} height={172} />
  },
  {
    title: 'Develop healthy habits',
    children: <Icon src={developLeft} width={81} height={172} />
  },
  {
    title: 'Develop healthy habits',
    children: <Icon src={developRight} width={100} height={172} />
  }
]

export const enum CardType {
  GOAL = 'goal',
  BEHAVIOR = 'behavior',
  ACTIVITY = 'activity'
}

export const enum ParagraphSize {
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary'
}
