import Translate, { translate } from '@docusaurus/Translate'
import clsx from 'clsx'
import React from 'react'
import styles from './footer.module.css'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'
import LanguageSwitcher from '@site/src/components/LanguageSwitcher'

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
            <p
              dangerouslySetInnerHTML={{
                __html: translate({
                  id: 'footer.about.content',
                  message:
                    'providing Fooides with an incentive to share their experiences and helping to create a trustworthy and accurate source of information for food lovers everywhere.',
                }),
              }}
            />
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
        <img className={styles.copyrightLogo} width="65" height="30" src="/img/logo-without-icon.svg" />
        <span className={styles.copyrightText}>
          @ 2023. All rights reserved | <Link to="/privacy-policy">Privacy Policy</Link> |{' '}
          <Link to="/tos">Terms of Service</Link>
        </span>
        <LanguageSwitcher />
      </div>
    </footer>
  )
}
