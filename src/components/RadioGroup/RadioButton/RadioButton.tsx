import { RadioGroupOption } from '@/types/types'
import { ChangeEvent, FC } from 'react'
import styles from './RadioButton.module.scss'
import classnames from 'classnames'

interface RadioButtonProps {
  option: RadioGroupOption
  isSelected: boolean
  onChange: (value: string) => void
}

const RadioButton: FC<RadioButtonProps> = ({
  option: { id, value, name, label },
  isSelected,
  onChange
}) => {
  const radioButtonClasses = classnames(styles.radio, {
    [styles['radio-active']]: isSelected
  })
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div tabIndex={0} className={radioButtonClasses}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isSelected}
        onChange={handleOnChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioButton
