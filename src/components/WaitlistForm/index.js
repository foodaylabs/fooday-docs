import React, { useEffect, useRef } from 'react'
import Translate, { translate } from '@docusaurus/Translate'
import clsx from 'clsx'
import styles from './waitlistForm.module.css'
import YellowArrowIcon from '@site/static/img/yellow-arrow.svg'
import { useWaitlist } from '@site/src/contexts/Waitlist'

export default function WaitlistForm({ defaultEmail, defaultIg, showCloseButton }) {
  const waitlist = useWaitlist()
  const emailRef = useRef()
  const igRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    waitlist.joinWaitlist(emailRef.current.value, igRef.current.value)
  }

  const closePopup = e => {
    e.preventDefault()
    e.stopPropagation()
    waitlist.closePopup()
  }

  useEffect(() => {
    if (igRef.current && igRef.current) {
      emailRef.current.value = defaultEmail ?? ''
      igRef.current.value = defaultIg ?? ''
    }
  }, [emailRef.current, igRef.current])

  return (
    <form className={styles.waitlistContent} onSubmit={handleSubmit}>
      <h1 className={styles.waitlistTitle}>
        <Translate id="waitlistForm.title">Become the Earliest Contributor to Eat & Earn</Translate>
      </h1>
      <p>
        <Translate id="waitlistForm.desc">
          Get a head start on the Fooday revolution and join the selected few now!
        </Translate>
      </p>

      <div className={styles.waitlistForm}>
        <div>
          <label htmlFor="email-input" className={styles.waitlistFormLabel}>
            <Translate id="waitlistForm.email">Email address</Translate>
          </label>
          <div className="foo-input">
            <input ref={emailRef} id="email-input" type="email" required placeholder="your_email@fooday.app" />
          </div>
        </div>
        <div>
          <label htmlFor="ig-account-input" className={styles.waitlistFormLabel}>
            <Translate id="waitlistForm.ig">Instagram account (optional)</Translate>
          </label>
          <div className={clsx(styles.igInput, 'foo-input')}>
            <span>@</span>
            <input ref={igRef} id="ig-account-input" placeholder="instagram account" />
          </div>
          <div className={styles.waitlistIgNote}>
            <YellowArrowIcon width="20px" height="10px" />
            <div className={styles.waitlistIgNoteBody}>
              <span className={styles.waitlistIgNoteTitle}>
                <Translate id="waitlistForm.igNoteTitle">Are you a foodie?</Translate>
              </span>
              <div
                dangerouslySetInnerHTML={{
                  __html: translate({
                    id: 'waitlistForm.igNoteContent',
                    message: `<p>Feel free to provide your Instagram account. If you are eligible as an influencing foodie, you may receive a camera NFT <span class="foo-hightlight-blue">for free!</span></p>`,
                  }),
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          {showCloseButton && (
            <button className={styles.waitlistCloseButton} onClick={closePopup}>
              <Translate id="home.waitlist.cancel">Cancel</Translate>
            </button>
          )}
          <button type="submit" className={styles.waitlistSubmitButton}>
            <Translate id="home.waitlist.submit">Join Waitlist</Translate>
          </button>
        </div>
      </div>
    </form>
  )
}
