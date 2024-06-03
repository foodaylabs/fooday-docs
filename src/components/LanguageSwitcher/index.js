import React from 'react'
import { useLocation } from '@docusaurus/router'
import { translate } from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './switcher.module.css'
import ArrowImage from './arrow.svg'

export default function LanguageSwitcher() {
  const { siteConfig } = useDocusaurusContext()
  const location = useLocation()
  const locale = getCurrentLocale(location.pathname, siteConfig.i18n.defaultLocale, siteConfig.i18n.locales)
  const selectValue = locale === siteConfig.i18n.defaultLocale ? '' : locale

  const onChange = e => {
    const pathname = location.pathname.substring(
      siteConfig.baseUrl.length,
      siteConfig.baseUrl.length + location.pathname.length
    )
    const pathnameWithLocale = `/${e.target.value}/${pathname}`.replace(/^\/+/, '/')
    window.location.href = pathnameWithLocale
  }

  return (
    <div className={styles.container}>
      {translate({ id: `locale.${locale}` })}

      <ArrowImage className={styles.arrowIcon} />

      <select value={selectValue} onChange={onChange} className={styles.select}>
        {siteConfig.i18n.locales.map(locale => (
          <option key={locale} value={locale === siteConfig.i18n.defaultLocale ? '' : locale}>
            {translate({ id: `locale.${locale}` })}
          </option>
        ))}
      </select>
    </div>
  )
}

function getCurrentLocale(pathname, defaultLocale, locales) {
  const locale = pathname.split('/')[1]
  return locales.includes(locale) ? locale : defaultLocale
}
