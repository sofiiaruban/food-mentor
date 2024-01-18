import { FC } from 'react'
import Icon from '../Icon'
import { activityList, CardType } from '@/data'
import CardList from '../List/CardList'
import activeGirl from '../../assets/active-girl.svg'
import styles from './ActivityContent.module.scss'

const ActivityContent: FC = () => {
  return (
    <section className={styles.content}>
      <Icon src={activeGirl} />
      <CardList cardList={activityList} type={CardType.ACTIVITY} />
    </section>
  )
}

export default ActivityContent
