import Layout from '../components/Layout'
import ParagraphPrimary from '../components/typography/ParagraphPrimary'
import { PRIMARY_TITLE } from '../data'

const Measure = () => {
  return (
    <>
      <ParagraphPrimary title={PRIMARY_TITLE.MEASURE} />
      <Layout>Measure</Layout>
    </>
  )
}

export default Measure
