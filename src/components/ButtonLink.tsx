import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonLinkProps {
  url: string
  children?: ReactNode
  className?: string
}
const ButtonLink: FC<ButtonLinkProps> = ({ url, children, className }) => {
  return (
    <Link to={url}>
      <button type="button" className={className}>
        {children}
      </button>
    </Link>
  )
}

export default ButtonLink
