import { FC } from 'react'
import Icon from '../../Icon'
import logo from '@/assets/Logo.svg'
import { ButtonBack } from '@/components/ButtonBack/ButtonBack'

const Header: FC = () => {
  return (
    <header>
      <ButtonBack />
      <Icon src={logo} width={150} height={35} alt="logo" />
    </header>
  )
}

export default Header
