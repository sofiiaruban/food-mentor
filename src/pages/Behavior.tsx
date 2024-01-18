import CardList from '@/components/List/CardList'
import Layout from '../components/Layout/Layout'
import DescriptionText from '../components/Typography/DescriptionText'
import ParagraphPrimary from '../components/Typography/ParagraphPrimary'
import { CardType, DescriptionTexts, PrimaryTitle, habitsList } from '../data'
import ButtonLink from '@/components/ButtonLink/ButtonLink'
import styles from '../components/ButtonLink/ButtonLink.module.scss'
import { useState } from 'react'
import classnames from 'classnames'
import { AppRoutes } from '@/AppRoutes'

const Behavior = () => {
  const NEXT_PAGE_URL = AppRoutes.ACTIVITY
  const [isDisable] = useState(false) // setIsDisable
  const buttonLinkClasses = classnames(
    styles.button,
    {
      [styles['button-disabled']]: isDisable
    },
    {
      [styles['button-active']]: !isDisable
    }
  )
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
