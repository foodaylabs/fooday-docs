import Translate from '@docusaurus/Translate'
import clsx from 'clsx'
import React from 'react'
import styles from './footer.module.css'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'

export default function Footer() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <footer className={clsx(styles.footer, 'foo-home-container')}>
      <nav className={styles.nav}>
        <div className={styles.about}>
          <span className={styles.title}>
            <Translate id="footer.about.title">About</Translate>
          </span>
          <div>
            <img src="/img/tokens.svg" />
            <p>
              <Translate id="footer.about.content">
                Providing Foodies with an incentive to share their experiences and helping to create a trustworthy and
                accurate source of information for food lovers everywhere.
              </Translate>
            </p>
          </div>
        </div>
        <div className={styles.media}>
          <span className={styles.title}>
            <Translate id="footer.media.title">Media</Translate>
          </span>
          <ul>
            <li>
              <Link to={siteConfig.customFields.links.twitter}>Twitter</Link>
            </li>
            <li>
              <Link to={siteConfig.customFields.links.ig}>Instagram</Link>
            </li>
            <li>
              <Link to={siteConfig.customFields.links.discord}>Discord</Link>
            </li>
            <li>
              <Link to={siteConfig.customFields.links.medium}>Medium</Link>
            </li>
          </ul>
        </div>
        <div className={styles.support}>
          <span className={styles.title}>
            <Translate id="footer.support.title">Support</Translate>
          </span>
          <ul>
            <li>
              <Link to={siteConfig.customFields.links.docs}>Docs</Link>
            </li>
            <li>
              <Link to={`mailto:${siteConfig.customFields.emails.contact}`}>Contact us via email</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.copyright}>
        <img src="/img/logo-without-icon.svg" />
        <span>@ 2023. All rights reserved</span>
      </div>
    </footer>
  )
}
