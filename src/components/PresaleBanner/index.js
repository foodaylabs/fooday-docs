import Translate from '@docusaurus/Translate'
import React from 'react'
import styles from './banner.module.css'
import FoocaImage from './fooca.svg'
import PFoodImage from './pfood.svg'
import ButtonImage from './button.svg'
import Link from '@docusaurus/Link'

export default function PresaleBanner() {
  return (
    <section className={styles.container}>
      <Link className={styles.banner} to="https://presale.fooday.app/">
        <div className={styles.bannerContent}>
          <h2 className={styles.bannerTitle}>
            <Translate id="presaleBanner.pfood.title">$pFOOD Presale</Translate>
          </h2>
          <p>
            <Translate id="presaleBanner.pfood.content">
              Buy $pFOOD with exclusively early price. Reach the mint tier to get the free Fooca Camera airdrops!
            </Translate>
          </p>
          <p className={styles.bannerHighlight}>
            <Translate id="presaleBanner.pfood.note">Until Apr 10, 2023 0+00 UTC</Translate>
          </p>
        </div>
        <PFoodImage className={styles.bannerImage} />
        <ButtonImage className={styles.button} />
      </Link>
      <Link className={styles.banner}>
        <div className={styles.bannerContent}>
          <h2 className={styles.bannerTitle}>
            <Translate id="presaleBanner.fooca.title">Fooca Box Presale</Translate>
          </h2>
          <p>
            <Translate id="presaleBanner.fooca.content">
              Mint the limited supply of genesis Fooca Box. Only 300 available in the first phase, so act fast!
            </Translate>
          </p>
          <p className={styles.bannerHighlight}>
            <Translate id="presaleBanner.fooca.note">Coming soon</Translate>
          </p>
        </div>
        <FoocaImage className={styles.bannerImage} />
        {/*
        <ButtonImage className={styles.button} />
        */}
      </Link>
    </section>
  )
}
