import GoalsCardList from '../components/GoalsCardList'
import Layout from '../components/Layout'
import DescriptionText from '../components/typography/DescriptionText'
import Paragraph from '../components/typography/Paragraph'
import ParagraphPrimary from '../components/typography/ParagraphPrimary'
import { PRIMARY_TITLE, DESCRIPTION_TEXT, TERTIARY_TITLE } from '../data'

const Goal = () => {
  return (
    <Layout>
      <ParagraphPrimary title={PRIMARY_TITLE.GOAL} />
      <DescriptionText text={DESCRIPTION_TEXT.GOAL} />
      <Paragraph title={TERTIARY_TITLE.GOAL} />
      <GoalsCardList />
    </Layout>
  )
}

export default Goal
