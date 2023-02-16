import React from 'react'
import Topbar from '@site/src/components/Topbar'
import styles from './layout.module.css'
import Footer from '@site/src/components/Footer'

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Topbar />
      {children}
      <Footer />
    </div>
  )
}
