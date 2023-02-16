import Translate from '@docusaurus/Translate'
import clsx from 'clsx'
import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
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
                providing Fooides with an incentive to share their experiences and helping to create a trustworthy and
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
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Discord</a>
            </li>
            <li>
              <a href="">Medium</a>
            </li>
          </ul>
        </div>
        <div className={styles.support}>
          <span className={styles.title}>
            <Translate id="footer.support.title">Support</Translate>
          </span>
          <ul>
            <li>
              <a href="">Docs</a>
            </li>
            <li>
              <a href="">Contact us via email</a>
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
