import { FC } from 'react'
import Icon from '../Icon'
import styles from './ButtonBack.module.scss'
import back from '@/assets/back.svg'
import { useNavigate } from 'react-router-dom'

export const ButtonBack: FC = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  return (
    <button type="button" className={styles.back} onClick={goBack}>
      <Icon src={back} />
    </button>
  )
}
