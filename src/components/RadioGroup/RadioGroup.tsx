import { FC } from 'react'
import RadioButton from './RadioButton/RadioButton'
import { RadioGroupOption } from '@/types/types'
import styles from './RadioGroup.module.scss'

interface RadioGroupProps {
  options: RadioGroupOption[]
  currentValue: string
  onChange: (value: string) => void
}

const RadioGroup: FC<RadioGroupProps> = ({
  options,
  currentValue,
  onChange
}) => {
  return (
    <div className={styles.group}>
      {options.map((option) => (
        <RadioButton
          key={option.id}
          option={option}
          isSelected={currentValue === option.value}
          onChange={onChange}
        />
      ))}
    </div>
  )
}

export default RadioGroup
