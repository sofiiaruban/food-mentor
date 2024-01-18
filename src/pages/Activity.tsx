import Layout from '../components/Layout'
import DescriptionText from '../components/typography/DescriptionText'
import Paragraph from '../components/typography/Paragraph'
import ParagraphPrimary from '../components/typography/ParagraphPrimary'
import { DescriptionTexts, PrimaryTitle, TertiaryTitle } from '../data'

const Activity = () => {
  return (
    <>
      <ParagraphPrimary title={PrimaryTitle.ACTIVITY} />
      <DescriptionText text={DescriptionTexts.ACTIVITY} />
      <Paragraph title={TertiaryTitle.ACTIVITY} />
      <Layout>Activity</Layout>
    </>
  )
}

export default Activity
