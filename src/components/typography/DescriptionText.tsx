import { FC } from 'react'

interface DescriptionTextProp {
  text: string
}

const DescriptionText: FC<DescriptionTextProp>= ({text}) => {
  return (
    <p>{text}</p>
  )
}

export default DescriptionText