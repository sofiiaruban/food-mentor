import Layout from '../components/Layout/Layout'
import DescriptionText from '../components/Typography/DescriptionText'
import ParagraphPrimary from '../components/Typography/ParagraphPrimary'
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
