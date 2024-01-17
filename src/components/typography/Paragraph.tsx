import { FC } from 'react'
import style from './Typography.module.css'

interface ParagraphProps {
  title: string
  size?: 'secondary' | 'tertiary'
}

const Paragraph: FC<ParagraphProps> = ({
  title
  //size = 'secondary'
}) => {
  return <h3 className={style.title_bold_main}>{title}</h3>
}

export default Paragraph
