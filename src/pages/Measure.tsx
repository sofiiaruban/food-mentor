import RadioGroup from '@/components/RadioGroup/RadioGroup'
import Layout from '../components/Layout/Layout'
import DescriptionText from '../components/Typography/DescriptionText'
import ParagraphPrimary from '../components/Typography/ParagraphPrimary'
import { PrimaryTitle, DescriptionTexts, RadioGroupOptions } from '../data'
import { useState } from 'react'

const Measure = () => {
  const [value, setValue] = useState(RadioGroupOptions[0].value)
  console.log(RadioGroupOptions)
  console.log(value)
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
