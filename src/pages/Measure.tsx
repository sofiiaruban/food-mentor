import Layout from '../components/Layout'
import DescriptionText from '../components/typography/DescriptionText'
import ParagraphPrimary from '../components/typography/ParagraphPrimary'
import { PRIMARY_TITLE, DESCRIPTION_TEXT } from '../data'

const Measure = () => {
  return (
    <>
      <ParagraphPrimary title={PRIMARY_TITLE.MEASURE} />
      <DescriptionText text={DESCRIPTION_TEXT.MEASURE} />
      <Layout>Measure</Layout>
    </>
  )
}

export default Measure
