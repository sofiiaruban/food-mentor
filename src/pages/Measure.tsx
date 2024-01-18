import RadioGroup from '@/components/RadioGroup/RadioGroup'
import Layout from '../components/Layout/Layout'
import DescriptionText from '../components/Typography/DescriptionText'
import ParagraphPrimary from '../components/Typography/ParagraphPrimary'
import {
  PrimaryTitle,
  DescriptionTexts,
  radioGroupOptions,
  imperialMeasureList,
  metricMeasureList
} from '../data'
import { useState } from 'react'
import Form from '@/components/MeasureInput/Form'
import ButtonLink from '@/components/ButtonLink/ButtonLink'
import { AppRoutes } from '@/AppRoutes'
import classnames from 'classnames'
import styles from '../components/ButtonLink/ButtonLink.module.scss'

const Measure = () => {
  const DEFAULT_VALUE = 'imperial'
  const [value, setValue] = useState(DEFAULT_VALUE)
  const [inputData, setInputData] = useState<{ [key: string]: string }>({})
  const NEXT_PAGE_URL = AppRoutes.BEHAVIOR
  const [isDisable, setIsDisable] = useState(true)
  const buttonLinkClasses = classnames(
    styles.button,
    {
      [styles['button-disabled']]: isDisable
    },
    {
      [styles['button-active']]: !isDisable
    }
  )

  const handleRadioChange = (newValue: string) => {
    setValue(newValue)
  }

  const handleInputChange = (name: string, value: string, isValid: boolean) => {
    setInputData((prevData) => ({
      ...prevData,
      [name]: value
    }))
    const isCorrectData = Object.keys(inputData).length === 0 && isValid
    setIsDisable(isCorrectData)
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
        measureList={
          value === DEFAULT_VALUE ? imperialMeasureList : metricMeasureList
        }
        onInputChange={handleInputChange}
      />
      <ButtonLink
        url={NEXT_PAGE_URL}
        children="Continue"
        className={buttonLinkClasses}
        isDisabled={isDisable}
      />
      {JSON.stringify(value)}
    </Layout>
  )
}

export default Measure
