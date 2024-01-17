import Layout from '../components/Layout'
import DescriptionText from '../components/typography/DescriptionText'
import Paragraph from '../components/typography/Paragraph'
import ParagraphPrimary from '../components/typography/ParagraphPrimary'
import { DESCRIPTION_TEXT, PRIMARY_TITLE, TERTIARY_TITLE } from '../data'

const Activity = () => {
  return (
    <>
      <ParagraphPrimary title={PRIMARY_TITLE.ACTIVITY} />
      <DescriptionText text={DESCRIPTION_TEXT.ACTIVITY} />
      <Paragraph title={TERTIARY_TITLE.ACTIVITY} />
      <Layout>Activity</Layout>
    </>
  )
}

export default Activity
