import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import LogoUrl from '@site/static/img/logo.png'
import Translate from '@docusaurus/Translate'
import styles from './topbar.module.css'
import Link from '@docusaurus/Link'
import { useWaitlist } from '@site/src/contexts/Waitlist'

export default function Topbar() {
  const [fixed, setFixed] = useState(false)
  const { siteConfig } = useDocusaurusContext()
  const links = siteConfig.customFields.links
  const waitlist = useWaitlist()

  useEffect(() => {
    const handlerFixed = throttle(() => {
      if (window.pageYOffset > 80) {
        setFixed(true)
      }
    }, 500)

    const handlerStatic = debounce(() => {
      if (window.pageYOffset < 80) {
        setFixed(false)
      }
    }, 500)

    window.addEventListener('scroll', handlerFixed)
    window.addEventListener('scroll', handlerStatic)

    return () => {
      window.removeEventListener('scroll', handlerFixed)
      window.removeEventListener('scroll', handlerStatic)
    }
  }, [])

  return (
    <div className={styles.container}>
      <nav className={clsx(styles.topbar, { [styles.topbarFixed]: fixed })} aria-label="Main">
        <div className={styles.topbarInner}>
          <Link className={styles.logo} to="/" aria-label="Link to homepage">
            <img src={LogoUrl} aria-label="The logo of FoodDay" />
          </Link>

          <div className={styles.links}>
            <Link className={styles.link} to={links.presale}>
              <Translate id="topbar.links.presale">Presale 🔥</Translate>
            </Link>
            <Link className={styles.link} to={links.docs}>
              <Translate id="topbar.links.docs">Docs</Translate>
            </Link>
            <Link className={clsx(styles.link, styles.whitelist)} role="button" onClick={() => waitlist.openPopup()}>
              <Translate id="topbar.links.whitelist">Join Whitelist</Translate>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
