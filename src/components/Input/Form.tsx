import { FC } from 'react'
import InputField from './InputField'
import { MeasureData } from '@/types/types'
import styles from './Form.module.scss'

interface FormProps {
  measureList: MeasureData[]
  onInputChange: (name: string, value: string, isValid: boolean) => void
  unit: string
}

const Form: FC<FormProps> = ({ measureList, onInputChange, unit }) => {
  return (
    <form className={styles.form}>
      {measureList.map((measure, index) => (
        <InputField
          type="text"
          key={`${measure.name}${index}`}
          placeholder={measure.placeholder}
          name={measure.name}
          onInputChange={(name, value, isValid) =>
            onInputChange(name, value, isValid)
          }
          unit={unit}
        />
      ))}
    </form>
  )
}

export default Form
