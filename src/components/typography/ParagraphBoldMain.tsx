import { FC } from 'react'
import style from './Typography.module.css'

interface ParagraphBoldMainProp {
  title: string
}

const ParagraphBoldMain: FC<ParagraphBoldMainProp> = ({ title }) => {
  return <h3 className={style.title_bold_main}>{title}</h3>
}

export default ParagraphBoldMain
 