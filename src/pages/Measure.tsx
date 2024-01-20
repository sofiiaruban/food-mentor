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
import { useEffect, useState } from 'react'
import Form from '@/components/Input/Form'
import ButtonLink from '@/components/ButtonLink/ButtonLink'
import { AppRoutes } from '@/AppRoutes'
import classnames from 'classnames'
import styles from '../components/ButtonLink/ButtonLink.module.scss'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectUserData, setUserData } from '@/store/user/userSlice'
import { updateMeasureData } from '@/helpers/updateMeasureData'
import { DEFAULT_UNIT } from '@/constants'
import { areAllValuesEmpty } from '@/helpers/areAllValuesEmpty'
import { areSomeValuesEmpty } from '@/helpers/areSomeValuesEmpty'

const Measure = () => {
  const [unit, setUnit] = useState(DEFAULT_UNIT)
  const NEXT_PAGE_URL = AppRoutes.BEHAVIOR
  const [isDisable, setIsDisable] = useState(true)
  const [isEmptyObj, setIsEmptyObj] = useState(true)
  const [isValid, setIsValid] = useState(false)

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

  const handleRadioChange = (newValue: string) => {
    setUnit(newValue)
  }

  const handleInputChange = (name: string, value: string, isValid: boolean) => {
    const newDataState = updateMeasureData(userData, unit, name, value)
    dispatch(setUserData(newDataState))
    setIsValid(isValid)
  }

  useEffect(() => {
    const data = userData.measure[unit]
    const isAllEmpty = areAllValuesEmpty(data)
    setIsEmptyObj(isAllEmpty)
    if (isAllEmpty === false) {
      setIsDisable(false)
    }
    const isSomeEmpty = areSomeValuesEmpty(data)
    setIsDisable(isSomeEmpty || (isEmptyObj && !isValid))
  }, [unit, userData, isValid, isEmptyObj])

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
    </Layout>
  )
}

export default Measure
