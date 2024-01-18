import { FC } from 'react'
import styles from './Typography.module.scss'

interface ParagraphPrimaryProp {
  title: string
}

const ParagraphPrimary: FC<ParagraphPrimaryProp> = ({ title }) => {
  const titleClasses = `${styles.text} ${styles['text-primary']}`
  return <h2 className={titleClasses}>{title}</h2>
}

export default ParagraphPrimary
