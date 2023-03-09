import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import React from 'react'
import styles from './fooca.module.css'

export default function GenesisFoocaSection() {
  return (
    <section className={styles.container}>
      <div className={styles.main}>
        <span className={styles.status}>
          <Translate id="genesis.status">Ongoing</Translate>
        </span>
        <h1 className={styles.title}>
          <Translate id="genesis.title">Limited Presale: Genesis Fooca Box</Translate>
        </h1>
        <p className={styles.content}>
          <Translate id="genesis.content">
            Join the limited presale for the Genesis Fooca Box - only 300 boxes available in the first phase. Each box
            contains a randomly generated Genesis Fooca NFT, the earliest and most precious generation of Fooca.
          </Translate>
        </p>
        <div className={styles.button}>
          <Link>
            <Translate id="genesis.button">Mint Now</Translate>
          </Link>
        </div>
      </div>
    </section>
  )
}
