import RadioGroup from '@/components/RadioGroup/RadioGroup'
import Layout from '../components/Layout/Layout'
import DescriptionText from '../components/Typography/DescriptionText'
import ParagraphPrimary from '../components/Typography/ParagraphPrimary'
import {
  PrimaryTitle,
  DescriptionTexts,
  radioGroupOptions,
  imperialMeasureList
} from '../data'
import { useState } from 'react'
import Form from '@/components/MeasureInput/Form'

const Measure = () => {
  const DEFAULT_VALUE = radioGroupOptions[0].value
  const [value, setValue] = useState(DEFAULT_VALUE)
  const [inputData, setInputData] = useState<{ [key: string]: string }>({})

  const handleRadioChange = (newValue: string) => {
    setValue(newValue)
  }

  const handleInputChange = (name: string, value: string) => {
    setInputData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <Layout>
      <ParagraphPrimary title={PrimaryTitle.MEASURE} />
      <DescriptionText text={DescriptionTexts.MEASURE} />
      <RadioGroup
        options={radioGroupOptions}
        currentValue={value}
        onChange={handleRadioChange}
      />
      <Form
        measureList={imperialMeasureList}
        onInputChange={handleInputChange}
      />
      {JSON.stringify(inputData)}
    </Layout>
  )
}

export default Measure
