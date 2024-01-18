import CardList from '../components/List/CardList'
import Layout from '../components/Layout/Layout'
import DescriptionText from '../components/Typography/DescriptionText'
import Paragraph from '../components/Typography/Paragraph'
import ParagraphPrimary from '../components/Typography/ParagraphPrimary'
import { AppRoutes } from '@/AppRoutes'
import {
  PrimaryTitle,
  DescriptionTexts,
  TertiaryTitle,
  goalsList,
  ParagraphSize
} from '../data'

const Goal = () => {
  const NEXT_PAGE_URL = AppRoutes.MEASURE

  return (
    <Layout>
      <ParagraphPrimary title={PrimaryTitle.GOAL} />
      <DescriptionText text={DescriptionTexts.GOAL} />
      <Paragraph title={TertiaryTitle.GOAL} size={ParagraphSize.TERTIARY} />
      <CardList cardList={goalsList} isLink={true} url={NEXT_PAGE_URL} />
    </Layout>
  )
}

export default Goal
