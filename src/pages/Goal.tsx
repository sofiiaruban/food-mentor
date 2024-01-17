import GoalsCardList from '../components/GoalsCardList'
import Layout from '../components/Layout'
import ParagraphPrimary from '../components/typography/ParagraphPrimary'
import { PRIMARY_TITLE } from '../data'

const Goal = () => {
  return (
    <Layout>
      <ParagraphPrimary title={PRIMARY_TITLE.GOAL} />
      <GoalsCardList />
    </Layout>
  )
}

export default Goal
