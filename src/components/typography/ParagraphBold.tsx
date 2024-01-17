import { FC } from 'react'
import style from './Typography.module.css'

interface ParagraphBoldProp {
  title: string
}

const ParagraphBoldMain: FC<ParagraphBoldProp> = ({ title }) => {
  return <h2 className={style.title_bold}>{title}</h2>
}

export default ParagraphBoldMain
