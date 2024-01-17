import { FC } from 'react'

interface IconProps {
  src: string
  width?: number
  height?: number
  alt?: string
}

const Icon: FC<IconProps> = ({ src, width, height, alt }) => {
  return <img src={src} width={width} height={height} alt={alt} />
}

export default Icon
