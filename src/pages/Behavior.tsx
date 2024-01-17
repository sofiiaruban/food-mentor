import Layout from '../components/Layout'
import ParagraphPrimary from '../components/typography/ParagraphPrimary'
import { PRIMARY_TITLE } from '../data'

const Behavior = () => {
  return (
    <>
      <ParagraphPrimary title={PRIMARY_TITLE.BEHAVIOR} />
      <Layout>Behavior</Layout>
    </>
  )
}

export default Behavior
