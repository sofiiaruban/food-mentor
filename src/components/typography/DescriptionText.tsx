import { FC } from 'react'
import styles from './Typography.module.scss'

interface DescriptionTextProp {
  text: string
}

const DescriptionText: FC<DescriptionTextProp> = ({ text }) => {
  const textClasses = `${styles.text} ${styles['description-text']}`
  return <p className={textClasses}>{text}</p>
}

export default DescriptionText
