import Layout from '../components/Layout'
import DescriptionText from '../components/typography/DescriptionText'
import ParagraphPrimary from '../components/typography/ParagraphPrimary'
import { DESCRIPTION_TEXT, PRIMARY_TITLE } from '../data'

const Behavior = () => {
  return (
    <>
      <ParagraphPrimary title={PRIMARY_TITLE.BEHAVIOR} />
      <DescriptionText text={DESCRIPTION_TEXT.BEHAVIOR} />
      <Layout>Behavior</Layout>
    </>
  )
}

export default Behavior
