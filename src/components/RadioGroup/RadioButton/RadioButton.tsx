import { RadioGroupOption } from '@/types/types'
import { ChangeEvent, FC } from 'react'

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
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }
  return (
    <div tabIndex={0}>
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
