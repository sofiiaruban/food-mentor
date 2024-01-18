import CardList from '../components/List/CardList'
import Layout from '../components/Layout'
import DescriptionText from '../components/typography/DescriptionText'
import Paragraph from '../components/typography/Paragraph'
import ParagraphPrimary from '../components/typography/ParagraphPrimary'
import {
  PrimaryTitle,
  DescriptionTexts,
  TertiaryTitle,
  goalsList
} from '../data'
const Goal = () => {
  return (
    <Layout>
      <ParagraphPrimary title={PrimaryTitle.GOAL} />
      <DescriptionText text={DescriptionTexts.GOAL} />
      <Paragraph title={TertiaryTitle.GOAL} />
      <CardList cardList={goalsList} />
    </Layout>
  )
}

export default Goal
