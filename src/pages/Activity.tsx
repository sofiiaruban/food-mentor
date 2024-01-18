import ActivityContent from '@/components/ActivityContent/ActivityContent'
import Layout from '../components/Layout/Layout'
import DescriptionText from '../components/Typography/DescriptionText'
import Paragraph from '../components/Typography/Paragraph'
import ParagraphPrimary from '../components/Typography/ParagraphPrimary'
import { DescriptionTexts, PrimaryTitle, TertiaryTitle } from '../data'

const Activity = () => {
  return (
    <Layout>
      <ParagraphPrimary title={PrimaryTitle.ACTIVITY} />
      <DescriptionText text={DescriptionTexts.ACTIVITY} />
      <Paragraph title={TertiaryTitle.ACTIVITY} />
      <ActivityContent />
    </Layout>
  )
}

export default Activity
