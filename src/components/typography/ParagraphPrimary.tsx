import { FC } from 'react'
import style from './Typography.module.scss'

interface ParagraphPrimaryProp {
  title: string
}

const ParagraphPrimary: FC<ParagraphPrimaryProp> = ({ title }) => {
  return <h2 className={style.title_bold}>{title}</h2>
}

export default ParagraphPrimary
