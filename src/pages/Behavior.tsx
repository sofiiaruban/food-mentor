import Layout from '../components/Layout'
import DescriptionText from '../components/typography/DescriptionText'
import ParagraphPrimary from '../components/typography/ParagraphPrimary'
import { DescriptionTexts, PrimaryTitle } from '../data'

const Behavior = () => {
  return (
    <>
      <ParagraphPrimary title={PrimaryTitle.BEHAVIOR} />
      <DescriptionText text={DescriptionTexts.BEHAVIOR} />
      <Layout>Behavior</Layout>
    </>
  )
}

export default Behavior
