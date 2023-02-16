import React, { useRef } from 'react'
import Translate, { translate } from '@docusaurus/Translate'
import clsx from 'clsx'
import styles from './waitlistForm.module.css'
import YellowArrowIcon from '@site/static/img/yellow-arrow.svg'
import { useWaitlist } from '@site/src/contexts/Waitlist'

export default function WaitlistForm() {
  const waitlist = useWaitlist()
  const emailRef = useRef()
  const igRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    waitlist.joinWaitlist(emailRef.current.value, igRef.current.value)
  }

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
          <label for="email-input" className={styles.waitlistFormLabel}>
            <Translate id="waitlistForm.email">Email address</Translate>
          </label>
          <div className="foo-input">
            <input trf={emailRef} id="email-input" type="email" required placeholder="your_email@fooday.app" />
          </div>
        </div>
        <div>
          <label for="ig-account-input" className={styles.waitlistFormLabel}>
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
        <div>
          <button type="submit" className={styles.waitlistSubmitButton}>
            <Translate id="home.waitlist.submit">Join Waitlist</Translate>
          </button>
        </div>
      </div>
    </form>
  )
}
