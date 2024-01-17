import Layout from '../components/Layout'
import ParagraphPrimary from '../components/typography/ParagraphPrimary'
import { PRIMARY_TITLE } from '../data'

const Activity = () => {
  return (
    <>
      <ParagraphPrimary title={PRIMARY_TITLE.ACTIVITY} />
      <Layout>Activity</Layout>
    </>
  )
}

export default Activity
