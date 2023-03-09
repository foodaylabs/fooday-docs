import Translate, { translate } from '@docusaurus/Translate'
import React from 'react'
import styles from './camera.module.css'
import foocasImage from './foocas.webp'
import CIcon from './c.svg'
import QIcon from './q.svg'
import BIcon from './b.svg'
import LIcon from './l.svg'
import Link from '@docusaurus/Link'
import previewImage from './preview.webp'

export default function CameraSection() {
  return (
    <section className={styles.container}>
      <div className="foo-home-container">
        <h1 className={styles.title}>
          <Translate id="camera.title">Introducing FOOCA Camera</Translate>
        </h1>

        <section className={styles.main}>
          <img className={styles.mainImage} src={foocasImage} />
          <h2 className={styles.mainTitle}>
            <Translate id="camera.main.title">The Essential NFT for Contributing and Earning on Fooday</Translate>
          </h2>
          <div
            className={styles.mainContent}
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'camera.main.content',
                message:
                  "<p>Ready to become a top contributor on Fooday? You'll need a Fooca Camera. </p><p></p>This essential NFT serves as proof of your dedication to the platform and allows you to earn FUDOS for your contributions. Fooca Camera is the key to unlocking exclusive rewards and elevating your status within the Fooday community.</p>",
              }),
            }}
          ></div>
        </section>

        <section className={styles.attrs}>
          <h2 className={styles.attrsTitle}>
            <Translate id="camera.attrs.title">
              Fooca Camera is a unique NFT that has four attributes: Computing, Quality, Battery, and Luck. These
              attributes affect the performance of the FODUS that you earn when contributing to the Fooday platform.
            </Translate>
          </h2>
          <div className={styles.attrsContent}>
            <img src={previewImage} className={styles.attrsImage} />
            <div className={styles.attrsContentSections}>
              <section>
                <h3 className={styles.attrsSectionTitle}>
                  <CIcon /> <Translate id="camera.attrs.computing.title">Computing</Translate>
                </h3>
                <p>
                  <Translate id="camera.attrs.computing.content">
                    Computing is related to the amount of Energy points that users consume when performing a
                    contribution action on Fooday. The more Computing score the Fooca has, the less Energy points the
                    user will consume when performing such an action.
                  </Translate>
                </p>
              </section>

              <section>
                <h3 className={styles.attrsSectionTitle}>
                  <QIcon /> <Translate id="camera.attrs.quality.title">Quality</Translate>
                </h3>
                <p>
                  <Translate id="camera.attrs.quality.content">
                    Quality determines the amount of FODUS that users can earn per contribution. The higher the Quality
                    score of the Fooca, the more FODUS the user can collect per contribution. This attribute
                    incentivizes users to provide high-quality contributions to the platform, as they will be rewarded
                    more for their efforts.
                  </Translate>
                </p>
              </section>

              <section>
                <h3 className={styles.attrsSectionTitle}>
                  <BIcon /> <Translate id="camera.attrs.battery.title">Battery</Translate>
                </h3>
                <p>
                  <Translate id="camera.attrs.battery.content">
                    Battery represents the amount of power a Fooca has to contribute on Fooday. The Battery value
                    decreases with each contribution, affecting the Fooca's contribution activity and rewards. Users
                    need to monitor their Fooca's Battery and "recharge" it using $FOOD tokens to maximize rewards and
                    contribute to Fooday community.
                  </Translate>
                </p>
              </section>

              <section>
                <h3 className={styles.attrsSectionTitle}>
                  <LIcon /> <Translate id="camera.attrs.luck.title">Luck</Translate>
                </h3>
                <p>
                  <Translate id="camera.attrs.luck.content">
                    Luck, is related to the chance of users getting a loot box when they equip their Fooca to
                    contribute. The higher the Luck score of the Fooca, the higher the chance the user will get a loot
                    box, which can contain rewards such as additional FODUS or other rare items.
                  </Translate>
                </p>
              </section>
            </div>
          </div>

          <div className={styles.learnMore}>
            <Link>
              <Translate id="camera.learnMore">Learn more about Fooca Camera</Translate>
            </Link>
          </div>
        </section>
      </div>
    </section>
  )
}
