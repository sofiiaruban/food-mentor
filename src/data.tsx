import Icon from './components/Icon'
import lose from '@/assets/lose-img.svg'
import gain from '@/assets/gain-img.svg'
import developLeft from '@/assets/develop-left.svg'
import developRight from '@/assets/develop-right.svg'
import moon from '@/assets/moon.svg'
import donut from '@/assets/donut.svg'
import soda from '@/assets/soda.svg'
import salt from '@/assets/salt.svg'
import pizza from '@/assets/food-and-restaurant.svg'
import forbidden from '@/assets/forbidden.svg'

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

export const habitsList = [
  {
    title: "I don't rest enough",
    name: 'restLack',
    children: <Icon src={moon} alt="moon" />
  },
  {
    title: 'I have a sweet tooth',
    name: 'sweet',
    children: <Icon src={donut} alt="sweet tooth" />
  },
  {
    title: 'I have too much soda',
    name: 'soda',
    children: <Icon src={soda} alt="soda" />
  },
  {
    title: 'I eat many salty foods',
    name: 'salt',
    children: <Icon src={salt} alt="jar of salt" />
  },
  {
    title: 'I enjoy midnight snacks',
    name: 'snacks',
    children: <Icon src={pizza} alt="pizza" />
  },
  {
    title: 'None of the above',
    name: 'none',
    children: <Icon src={forbidden} alt="forbidden" />
  }
]
export const goalsList = [
  {
    title: 'Lose Weight',
    name: 'lose',
    children: <Icon src={lose} width={85} height={172} alt="woman" />
  },
  {
    title: 'Gain Muscle',
    name: 'gain',
    children: <Icon src={gain} width={130} height={172} alt="woman" />
  },
  {
    title: 'Develop healthy habits',
    name: 'health',
    children: <Icon src={developLeft} width={81} height={172} alt="woman" />
  },
  {
    title: 'Develop healthy habits',
    name: 'stressRelief',
    children: <Icon src={developRight} width={100} height={172} alt="woman" />
  }
]
export const activityList = [
  { title: 'Hardly at all', name: 'none' },
  { title: 'Fitness 1-2 times a week', name: 'low' },
  { title: 'Fitness 3-5 times a week', name: 'average' },
  { title: 'Fitness 5-7 times a week', name: 'active' }
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
export const radioGroupOptions = [
  {
    id: '1#',
    name: 'radioGroup',
    value: 'metric',
    label: 'metric'
  },
  {
    id: '2#',
    name: 'radioGroup',
    value: 'imperial',
    label: 'imperial'
  }
]

export const imperialMeasureList = [
  { name: 'height', placeholder: 'Height (ft)' },
  {
    name: 'weight',
    placeholder: 'Current Weight (lb)'
  }
]
export const metricMeasureList = [
  { name: 'height', placeholder: 'Height (cm)' },
  {
    name: 'weight',
    placeholder: 'Current Weight (kg)'
  }
]
