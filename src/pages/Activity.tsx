import ActivityContent from '@/components/ActivityContent/ActivityContent'
import Layout from '../components/Layout/Layout'
import DescriptionText from '../components/Typography/DescriptionText'
import Paragraph from '../components/Typography/Paragraph'
import ParagraphPrimary from '../components/Typography/ParagraphPrimary'
import {
  CardType,
  DescriptionTexts,
  PrimaryTitle,
  TertiaryTitle
} from '../data'
import { AppRoutes } from '@/AppRoutes'
import ButtonLink from '@/components/ButtonLink/ButtonLink'
import { useEffect, useState } from 'react'
import classnames from 'classnames'
import styles from '../components/ButtonLink/ButtonLink.module.scss'
import backWhite from '@/assets/backWhite.svg'
import Icon from '@/components/Icon'
import { useAppSelector } from '@/store/hooks'
import { selectUserData } from '@/store/user/userSlice'
import { isExactlyOneTruthyValue } from '@/helpers/isExactlyOneTruthyValue'

const Activity = () => {
  const NEXT_PAGE_URL = AppRoutes.GOAL
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
    const activityData = userData[CardType.ACTIVITY]
    const isOneTruthyValue = isExactlyOneTruthyValue(activityData)
    if (isOneTruthyValue === false) {
      setIsDisable(true)
    } else {
      setIsDisable(false)
    }
  }, [userData])
  return (
    <Layout>
      <ParagraphPrimary title={PrimaryTitle.ACTIVITY} />
      <DescriptionText text={DescriptionTexts.ACTIVITY} />
      <Paragraph title={TertiaryTitle.ACTIVITY} />
      <ActivityContent />
      <ButtonLink
        url={NEXT_PAGE_URL}
        className={buttonLinkClasses}
        isDisabled={isDisable}
      >
        <Icon src={backWhite} />
        Back to Home
      </ButtonLink>
    </Layout>
  )
}

export default Activity
