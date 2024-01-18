import { FC } from 'react'
import Icon from './Icon'
import logo from '../assets/Logo.svg'
import ButtonLink from './ButtonLink/ButtonLink'
import back from '../assets/back.svg'

const Header: FC = () => {
  return (
    <header>
      <ButtonLink url="/">
        <Icon src={back} />
      </ButtonLink>
      <Icon src={logo} width={150} height={35} alt="logo" />
    </header>
  )
}

export default Header
