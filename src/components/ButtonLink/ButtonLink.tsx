import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonLinkProps {
  url: string
  children?: ReactNode
  className?: string
  isDisabled?: boolean
}

const ButtonLink: FC<ButtonLinkProps> = ({
  url,
  children,
  className,
  isDisabled = false
}) => {
  return (
    <Link to={url}>
      <button type="button" className={className} disabled={isDisabled}>
        {children}
      </button>
    </Link>
  )
}

export default ButtonLink
