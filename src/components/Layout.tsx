import { FC } from 'react'
import Header from './Header'

interface LayoutProp {
  children: React.ReactNode
}
const Layout: FC<LayoutProp> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
