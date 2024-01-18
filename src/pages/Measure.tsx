import RadioGroup from '@/components/RadioGroup/RadioGroup'
import Layout from '../components/Layout/Layout'
import DescriptionText from '../components/Typography/DescriptionText'
import ParagraphPrimary from '../components/Typography/ParagraphPrimary'
import { PrimaryTitle, DescriptionTexts, RadioGroupOptions } from '../data'
import { useState } from 'react'

const Measure = () => {
  const DEFAULT_VALUE = RadioGroupOptions[0].value
  const [value, setValue] = useState(DEFAULT_VALUE)

  return (
    <Layout>
      <ParagraphPrimary title={PrimaryTitle.MEASURE} />
      <DescriptionText text={DescriptionTexts.MEASURE} />
      <RadioGroup
        options={RadioGroupOptions}
        currentValue={value}
        onChange={setValue}
      />
    </Layout>
  )
}

export default Measure
