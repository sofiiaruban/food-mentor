import { ChangeEvent, FC, useEffect, useState } from 'react'
import styles from './InputField.module.scss'
import classnames from 'classnames'
import { useAppSelector } from '@/store/hooks'
import { selectUserData } from '@/store/user/userSlice'

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
  const [value, setValue] = useState('')
  const [isValid, setIsValid] = useState(true)
  const valueLength = value.length
  const MIN_VALUE_LENGTH = 2
  const inputClasses = classnames(
    styles['input-field'],
    {
      [styles['input-error']]: !isValid
    },
    { [styles['input-pass']]: isValid && valueLength >= MIN_VALUE_LENGTH }
  )
  const userData = useAppSelector(selectUserData)
  const storedValue = userData.measure[unit][name]

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    const isValidValue = validateInput(newValue)

    if (isValidValue) {
      setIsValid(true)
      setValue(newValue)
      onInputChange(name, newValue, isValidValue)
    } else {
      setIsValid(false)
    }
  }

  const validateInput = (value: string): boolean => {
    const numericValue = Number(value)
    return !isNaN(numericValue)
  }
  useEffect(() => {
    setValue('')
  }, [unit])
  
  return (
    <>
      <input
        className={inputClasses}
        type={type}
        placeholder={placeholder}
        name={name}
        value={storedValue || value}
        onChange={handleChange}
      />
      {!isValid ? <small className={styles.small}>Invalid input</small> : null}
    </>
  )
}

export default InputField
