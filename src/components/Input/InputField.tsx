import { ChangeEvent, FC, useEffect, useState } from 'react'
import styles from './InputField.module.scss'
import classnames from 'classnames'
import { useAppSelector } from '@/store/hooks'
import { selectUserData } from '@/store/user/userSlice'
import {
  CM_TO_FT,
  DEFAULT_NAME,
  DEFAULT_UNIT,
  KG_TO_LB,
  MIN_CM,
  MIN_KG
} from '@/constants'

interface InputFieldProps {
  type: string
  placeholder: string
  name: string
  onInputChange: (name: string, value: string, isValid: boolean) => void
  unit: string
}

const InputField: FC<InputFieldProps> = ({
  type,
  placeholder,
  name,
  onInputChange,
  unit
}) => {
  const [localValue, setLocalValue] = useState('')
  const [isValid, setIsValid] = useState(true)
  const MIN_WEIGHT =
    unit === DEFAULT_UNIT ? MIN_KG : Math.trunc(MIN_KG * KG_TO_LB)
  const MIN_HEIGHT =
    unit === DEFAULT_UNIT ? MIN_CM : Math.trunc(MIN_CM * CM_TO_FT)
  const MIN_ALLOWED_VAL = name === DEFAULT_NAME ? MIN_HEIGHT : MIN_WEIGHT

  const inputClasses = classnames(
    styles['input-field'],
    {
      [styles['input-error']]: !isValid
    },
    { [styles['input-pass']]: isValid }
  )
  const userData = useAppSelector(selectUserData)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    const isValidValue = validateInput(newValue)
    setLocalValue(newValue)
    console.log(newValue)
    if (isValidValue) {
      setIsValid(true)
      onInputChange(name, newValue, isValidValue)
    } else {
      setIsValid(false)
    }
  }

  const validateInput = (value: string): boolean => {
    const numericValue = Number(value)
    return !isNaN(numericValue) && numericValue >= MIN_ALLOWED_VAL
  }

  useEffect(() => {
    setLocalValue(userData.measure[unit][name])
    setIsValid(true)
  }, [name, unit, userData.measure])

  return (
    <>
      <input
        className={inputClasses}
        type={type}
        placeholder={placeholder}
        name={name}
        value={localValue}
        onChange={handleChange}
      />
      {!isValid ? <small className={styles.small}>Invalid input</small> : null}
    </>
  )
}

export default InputField
