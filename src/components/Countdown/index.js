import Translate from '@docusaurus/Translate'
import React from 'react'
import SimpleCountdown from 'react-countdown-simple'
import styles from './countdown.module.css'

const pad = num => (num < 10 ? `0${num}` : num)

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.container}>
      <div className={styles.part}>
        <div className={styles.partNumber}>{pad(days)}</div>
        <div className={styles.partLabel}>
          <Translate id="countdown.days">Days</Translate>
        </div>
      </div>

      <div className={styles.colon}>:</div>

      <div className={styles.part}>
        <div className={styles.partNumber}>{pad(hours)}</div>
        <div className={styles.partLabel}>
          <Translate id="countdown.hours">Hours</Translate>
        </div>
      </div>

      <div className={styles.colon}>:</div>

      <div className={styles.part}>
        <div className={styles.partNumber}>{pad(minutes)}</div>
        <div className={styles.partLabel}>
          <Translate id="countdown.mins">Mins</Translate>
        </div>
      </div>

      <div className={styles.colon}>:</div>

      <div className={styles.part}>
        <div className={styles.partNumber}>{pad(seconds)}</div>
        <div className={styles.partLabel}>
          <Translate id="countdown.secs">Secs</Translate>
        </div>
      </div>
    </div>
  )
}

export default function Countdown({ targetDate }) {
  return <SimpleCountdown targetDate={targetDate.toISOString()} renderer={renderer} />
}
