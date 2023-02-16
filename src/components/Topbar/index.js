import React from 'react'
import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import LogoUrl from '@site/static/img/logo.png'
import Translate from '@docusaurus/Translate'
import styles from './topbar.module.css'
import Link from '@docusaurus/Link'

export default function Topbar() {
  const { siteConfig } = useDocusaurusContext()
  const links = siteConfig.customFields.links

  return (
    <nav className={styles.topbar} aria-label="Main">
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
          <Link className={clsx(styles.link, styles.whitelist)} to="#whitelist">
            <Translate id="topbar.links.whitelist">Join Whitelist</Translate>
          </Link>
        </div>
      </div>
    </nav>
  )
}
