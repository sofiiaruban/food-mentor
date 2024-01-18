import { FC } from 'react'
import styles from './Typography.module.scss'

interface DescriptionTextProp {
  text: string
}

const DescriptionText: FC<DescriptionTextProp> = ({ text }) => {
  return <p className={styles.description_text}>{text}</p>
}

export default DescriptionText
