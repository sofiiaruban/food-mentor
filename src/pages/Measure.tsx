import Layout from '../components/Layout/Layout'
import DescriptionText from '../components/Typography/DescriptionText'
import ParagraphPrimary from '../components/Typography/ParagraphPrimary'
import { PrimaryTitle, DescriptionTexts } from '../data'

const Measure = () => {
  return (
    <>
      <ParagraphPrimary title={PrimaryTitle.MEASURE} />
      <DescriptionText text={DescriptionTexts.MEASURE} />
      <Layout>Measure</Layout>
    </>
  )
}

export default Measure
