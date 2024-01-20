import CardList from '@/components/List/CardList'
import Layout from '../components/Layout/Layout'
import DescriptionText from '../components/Typography/DescriptionText'
import ParagraphPrimary from '../components/Typography/ParagraphPrimary'
import { CardType, DescriptionTexts, PrimaryTitle, habitsList } from '../data'
import ButtonLink from '@/components/ButtonLink/ButtonLink'
import styles from '../components/ButtonLink/ButtonLink.module.scss'
import { useEffect, useState } from 'react'
import classnames from 'classnames'
import { AppRoutes } from '@/AppRoutes'
import { useAppSelector } from '@/store/hooks'
import { selectUserData } from '@/store/user/userSlice'
import { areSomeTruthyValue } from '@/helpers/areSomeTruthyValue'

const Behavior = () => {
  const NEXT_PAGE_URL = AppRoutes.ACTIVITY
  const [isDisable, setIsDisable] = useState(true)
  const userData = useAppSelector(selectUserData)
  const buttonLinkClasses = classnames(
    styles.button,
    {
      [styles['button-disabled']]: isDisable
    },
    {
      [styles['button-active']]: !isDisable
    }
  )
  useEffect(() => {
    const behaviorData = userData[CardType.BEHAVIOR]
    const areTruthyValues = areSomeTruthyValue(behaviorData)
    if (areTruthyValues === false) {
      setIsDisable(true)
    } else {
      setIsDisable(false)
    }
  }, [userData])
  return (
    <>
      <Layout>
        <ParagraphPrimary title={PrimaryTitle.BEHAVIOR} />
        <DescriptionText text={DescriptionTexts.BEHAVIOR} />
        <CardList cardList={habitsList} type={CardType.BEHAVIOR} />
        <ButtonLink
          url={NEXT_PAGE_URL}
          children="Continue"
          className={buttonLinkClasses}
          isDisabled={isDisable}
        />
      </Layout>
    </>
  )
}

export default Behavior
