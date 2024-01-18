import { FC } from 'react'
import styles from './Typography.module.scss'
import { ParagraphSize } from '@/data'
import classnames from 'classnames'

interface ParagraphProps {
  title: string
  size?: ParagraphSize
}

const Paragraph: FC<ParagraphProps> = ({
  title,
  size = ParagraphSize.SECONDARY
}) => {
  const titleClasses = classnames(styles.text, styles[`text-${size}`])
  return <h3 className={titleClasses}>{title}</h3>
}

export default Paragraph
