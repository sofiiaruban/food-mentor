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
import { validateInput } from '@/helpers/validateInput'
import { getMinValidValue } from '@/helpers/getMinValidValue'

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
  const [isFocused, setIsFocused] = useState(false)
  const MIN_WEIGHT = getMinValidValue(unit, DEFAULT_UNIT, MIN_KG, KG_TO_LB)
  const MIN_HEIGHT = getMinValidValue(unit, DEFAULT_UNIT, MIN_CM, CM_TO_FT)
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
    const isValidValue = validateInput(newValue, MIN_ALLOWED_VAL)
    setLocalValue(newValue)

    if (isValidValue) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
    onInputChange(name, newValue, isValidValue)
  }
  const handleFocus = () => {
    setIsFocused(true)
  }

  useEffect(() => {
    setLocalValue(userData.measure[unit][name])
    const isValid = validateInput(localValue, MIN_ALLOWED_VAL)
    setIsValid(isValid)
  }, [MIN_ALLOWED_VAL, localValue, name, unit, userData.measure])

  return (
    <>
      <input
        className={inputClasses}
        type={type}
        placeholder={placeholder}
        name={name}
        value={localValue}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      {!isValid && isFocused ? (
        <small className={styles.small}>Invalid input</small>
      ) : null}
    </>
  )
}

export default InputField
