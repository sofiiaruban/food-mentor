import { FC } from 'react'
import Header from '../Header'
import styles from './Layout.module.scss'

interface LayoutProp {
  children: React.ReactNode
}

const Layout: FC<LayoutProp> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  )
}

export default Layout
