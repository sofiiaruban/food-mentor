import { ChangeEvent, FC, useState } from 'react'
import styles from './InputField.module.scss'
import classnames from 'classnames'

interface InputFieldProps {
  type: string
  placeholder: string
  name: string
  onInputChange: (name: string, value: string) => void
}

const InputField: FC<InputFieldProps> = ({
  type,
  placeholder,
  name,
  onInputChange
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    const isValidValue = validateInput(newValue)

    if (isValidValue) {
      setIsValid(true)
      setValue(newValue)
      onInputChange(name, newValue)
    } else {
      setIsValid(false)
    }
  }

  const validateInput = (value: string): boolean => {
    const numericValue = Number(value)
    return !isNaN(numericValue)
  }

  return (
    <>
      <input
        className={inputClasses}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {!isValid ? <small className={styles.small}>Invalid input</small> : null}
    </>
  )
}

export default InputField
