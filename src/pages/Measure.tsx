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
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectUserData, setUserData } from '@/store/user/userSlice'
import { UserData } from '@/types/types'

const Measure = () => {
  const DEFAULT_UNIT = 'metric'
  const [unit, setUnit] = useState(DEFAULT_UNIT)
  const [inputData, setInputData] = useState({})
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
  const dispatch = useAppDispatch()
  const userData = useAppSelector(selectUserData)

  const updateMeasureData = (
    userData: UserData,
    unit: string,
    name: string,
    value: string
  ): UserData => {
    return {
      ...userData,
      measure: {
        ...userData.measure,
        [unit]: {
          ...userData.measure[unit],
          [name]: value
        }
      }
    }
  }

  const handleRadioChange = (newValue: string) => {
    setUnit(newValue)
  }

  const handleInputChange = (name: string, value: string, isValid: boolean) => {
    setInputData((prevData) => ({
      ...prevData,
      [name]: value
    }))

    const isCorrectData = Object.keys(inputData).length === 0 && isValid
    setIsDisable(isCorrectData)
    const newDataState = updateMeasureData(userData, unit, name, value)

    dispatch(setUserData(newDataState))
  }

  return (
    <Layout>
      <ParagraphPrimary title={PrimaryTitle.MEASURE} />
      <DescriptionText text={DescriptionTexts.MEASURE} />
      <RadioGroup
        options={radioGroupOptions}
        currentValue={unit}
        onChange={handleRadioChange}
      />
      {unit === DEFAULT_UNIT ? (
        <Form
          measureList={metricMeasureList}
          onInputChange={handleInputChange}
          unit={unit}
        />
      ) : (
        <Form
          measureList={imperialMeasureList}
          onInputChange={handleInputChange}
          unit={unit}
        />
      )}

      <ButtonLink
        url={NEXT_PAGE_URL}
        children="Continue"
        className={buttonLinkClasses}
        isDisabled={isDisable}
      />
      {JSON.stringify(userData)}
    </Layout>
  )
}

export default Measure
