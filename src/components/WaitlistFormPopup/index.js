import React from 'react'
import ReactModal from 'react-modal'
import { useWaitlist } from '../../contexts/Waitlist'
import styles from './waitlistFormPopup.module.css'
import WaitlistForm from '@site/src/components/WaitlistForm'
import Translate, { translate } from '@docusaurus/Translate'
import DiscordIcon from '@site/static/img/discord.svg'
import IGIcon from '@site/static/img/ig.svg'
import MediumIcon from '@site/static/img/medium.svg'
import TwitterIcon from '@site/static/img/twitter.svg'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'

export default function WaitlistFormPopup() {
  const { succeeded, popupOpened, email, ig } = useWaitlist()
  return (
    <ReactModal closeTimeoutMS={200} isOpen={popupOpened}>
      <div className={styles.container}>
        {!succeeded && <WaitlistForm defaultEmail={email} defaultIg={ig} showCloseButton />}
        {succeeded && <SucceededView />}
      </div>
    </ReactModal>
  )
}

function SucceededView() {
  const { siteConfig } = useDocusaurusContext()
  const { closePopup } = useWaitlist()

  return (
    <div className={styles.succeededView}>
      <div className={styles.image} />
      <h1 className={styles.succeededViewTitle}>
        <Translate id="waitlistFormPopup.success.title">Thank you!</Translate>
      </h1>
      <div
        className={styles.succeededViewMessage}
        dangerouslySetInnerHTML={{
          __html: translate({
            id: 'waitlistFormPopup.success.message',
            message: `<p>You are in the waitlist now.<br />Keep up to date with our latest updates by joining our Discord server and follow our other media platforms!</p>`,
          }),
        }}
      />
      <Link role="button" className={styles.discordButton} to={siteConfig.customFields.links.discord}>
        <DiscordIcon />
        <Translate id="waitlistFormPopup.success.discord">Join Our Discord</Translate>
      </Link>
      <div className={styles.socialLinks}>
        <Link to={siteConfig.customFields.links.twitter}>
          <TwitterIcon />
        </Link>
        <Link to={siteConfig.customFields.links.medium}>
          <MediumIcon />
        </Link>
        <Link to={siteConfig.customFields.links.ig}>
          <IGIcon />
        </Link>
      </div>
      <button className={styles.closeButton} onClick={closePopup}>
        <Translate id="waitlistFormPopup.success.close">Close</Translate>
      </button>
    </div>
  )
}
