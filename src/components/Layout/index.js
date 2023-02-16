import React from 'react'
import Topbar from '@site/src/components/Topbar'
import styles from './layout.module.css'
import Footer from '@site/src/components/Footer'
import WaitlistFormPopup from '@site/src/components/WaitlistFormPopup'

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Topbar />
      {children}
      <Footer />
      <WaitlistFormPopup />
    </div>
  )
}
