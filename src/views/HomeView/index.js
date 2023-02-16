import Translate, { translate } from '@docusaurus/Translate'
import clsx from 'clsx'
import React, { useCallback, useState } from 'react'
import Countdown from '@site/src/components/Countdown'
import styles from './homeview.module.css'
import BoomIcon from '@site/static/img/problems-bomb.svg'
import FakeReviewsIcon from '@site/static/img/problems-fake-reviews.svg'
import NoIncentiveIcon from '@site/static/img/problems-no-incentive.svg'
import SolutionValidateIcon from '@site/static/img/solution-validate.svg'
import SolutionKeepUpdateIcon from '@site/static/img/solution-keep-update.svg'
import SolutionNewSpotsIcon from '@site/static/img/solution-new-spots.svg'
import SolutionWritingIcon from '@site/static/img/solution-writing.svg'
import YellowArrowIcon from '@site/static/img/yellow-arrow.svg'
import { useApi } from '../../hooks/api'

export default function HomeView() {
  const [email, setEmail] = useState('')
  const [igAccount, setIgAccount] = useState('')
  const api = useApi()

  const joinWaitlist = useCallback(() => {
    api
      .joinWaitlist(email, igAccount)
      .then(() => {
        setEmail('')
        setIgAccount('')
      })
      .catch(err => alert('failed to join the waitlist. details: ' + err.message))
  }, [email, igAccount, api])

  return (
    <main>
      <section className={styles.hero}>
        <div className="foo-home-container">
          <div className={styles.callToAction}>
            <h1 className={styles.heroSlogan1}>
              <Translate id="home.hero.slogan1">Eat & Earn</Translate>
            </h1>
            <h2 className={styles.heroSlogan2}>
              <Translate id="home.hero.slogan2">Get Paid for Your Opinions</Translate>
            </h2>
            <p className={styles.heroDesc}>
              <Translate id="home.hero.desc">
                A community-driven platform rewarding everyone for contributing helpful food information.
              </Translate>
            </p>
            <div className={clsx('foo-input', styles.heroInput)}>
              <input
                value={email}
                type="email"
                placeholder={translate({ id: 'home.hero.emailPlaceholder', message: 'your_email@fooday.app' })}
                onChange={e => setEmail(e.target.value)}
              />
              <button className={styles.heroButton}>
                <Translate id="home.hero.join">Join Waitlist</Translate>
              </button>
            </div>
            <div className={styles.heroCallToActionText}>
              <Translate id="home.hero.callToAction">Get early access by registering your email</Translate>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroShield}>
              <div className={styles.heroShieldRing} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.countdown}>
        <div className="foo-home-container">
          <div className={styles.countdownDiscount} />
          <div className={styles.countdownDesc}>
            <h1 className="foo-home-section-title">
              <Translate id="home.dountdown.clamStage.title">Presale</Translate>
            </h1>
            <p
              className={styles.countdownDescText}
              dangerouslySetInnerHTML={{
                __html: translate({
                  id: 'home.countdown.clamStage.desc',
                  message: '$CLAM Holder Only! <span class="foo-highlight">7 Days Limited Offer</span>',
                }),
              }}
            ></p>
            <p className={styles.countdownCallToAction}>
              <Translate id="home.countdown.clamStage.callToAction">Check out now</Translate>
            </p>
          </div>
          <div className={styles.countdownCounter}>
            <h2 className={styles.countdownCounterTitle}>
              <Translate id="home.countdown.counterTitle">CLAM Holder Presale Coming In</Translate>
            </h2>
            <Countdown targetDate={new Date('2023/02/17')} />
            <div
              className={styles.countdownCounterNote}
              dangerouslySetInnerHTML={{
                __html: translate({
                  id: 'home.countdown.counterNote',
                  message: `<p>CLAM Holder Sale: March 4th 2023, 0:00 ~ March 11th 2023, 0:00 UTC<br />Public Sale: March 11th 2023, 0:00 ~ April 10th 2023, 0:00 UTC</p>`,
                }),
              }}
            ></div>
          </div>
        </div>
      </section>

      <section className={clsx(styles.problems, 'foo-home-container')}>
        <h1 className={clsx(styles.problemsTitle, 'foo-home-section-title')}>
          <Translate id="home.problems.title">Problems</Translate>
        </h1>
        <img className={styles.problemsImage} src="/img/problems.svg" />
        <div className={styles.problemsContent}>
          <section className={styles.problemsSection}>
            <FakeReviewsIcon className={styles.problemsSectionIcon} />
            <h1 className={styles.problemsSectionTitle}>
              <Translate id="home.problems.problem1.title">Fake 5-star Reviews</Translate>
            </h1>
            <p className={styles.problemsSectionContent}>
              <Translate id="home.problems.problem1.desc">
                Customers are bribed by restaurants with coupons, discounts, etc to write positive reviews on online
                platforms to mislead other potential customers.
              </Translate>
            </p>
          </section>
          <section className={styles.problemsSection}>
            <NoIncentiveIcon className={styles.problemsSectionIcon} />
            <h1 className={styles.problemsSectionTitle}>
              <Translate id="home.problems.problem1.title">No Incentive to Leave Reviews</Translate>
            </h1>
            <p className={styles.problemsSectionContent}>
              <Translate id="home.problems.problem1.desc">
                Writing a post takes time and effort. Even when people do, they usually leave a simple review without
                rich content, which is generally not helpful to others.
              </Translate>
            </p>
          </section>
          <section className={styles.problemsSection}>
            <BoomIcon className={styles.problemsSectionIcon} />
            <h1 className={styles.problemsSectionTitle}>
              <Translate id="home.problems.problem1.title">Review Bombs by Media Framing</Translate>
            </h1>
            <p className={styles.problemsSectionContent}>
              <Translate id="home.problems.problem1.desc">
                The news or public sentiment sometimes influences people to leave emotional negative comments on the
                store, even though they have never eaten there.
              </Translate>
            </p>
          </section>
        </div>
      </section>

      <section className={styles.solution}>
        <div className="foo-home-container">
          <h1 className={clsx(styles.solutionTitle, 'foo-home-section-title')}>
            <Translate id="home.solution.title">Solution</Translate>
          </h1>
          <div className={styles.solutionContent}>
            <h2 className={styles.solutionDescTitle}>
              <Translate id="home.solution.descTitle">A Community-Driven Review Platform</Translate>
            </h2>
            <p className={styles.solutionDesc}>
              <Translate id="home.solution.desc">
                By continuing to contribute helpful and authentic dining experiences, you will earn experience points
                and increase your income, and you also act as a validator by verifying whether other people's comments
                are helpful.
              </Translate>
            </p>

            <div className={styles.solutionSteps}>
              <div className={styles.solutionStep}>
                <SolutionNewSpotsIcon className={styles.solutionStepIcon} />
                <Translate>Create new spots</Translate>
              </div>
              <div className={styles.solutionStep}>
                <SolutionWritingIcon className={styles.solutionStepIcon} />
                <Translate>Writing dining reviews</Translate>
              </div>
              <div className={styles.solutionStep}>
                <SolutionValidateIcon className={styles.solutionStepIcon} />
                <Translate>Validate information</Translate>
              </div>
              <div className={styles.solutionStep}>
                <SolutionKeepUpdateIcon className={styles.solutionStepIcon} />
                <Translate>Keep spot info updated</Translate>
              </div>
            </div>
          </div>
          <div className={styles.solutionImage}></div>
        </div>
      </section>

      <section className={clsx(styles.explain, 'foo-home-container')}>
        <h1 className={clsx('foo-home-section-title', styles.explainTitle)}>
          <Translate id="home.explain.title">How it Works</Translate>
        </h1>

        <section className={clsx(styles.explainSection1, styles.explainSectionStyle1)}>
          <img className={styles.explainSectionImage} src="/img/how-it-works1.svg" />
          <h1
            className={styles.explainSectionTitle}
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'home.explain.point1.title',
                message: `<span>A <span class="foo-highlight-bg">Contribution-Based</span> Incentive System</span>`,
              }),
            }}
          />
          <div
            className={styles.explainSectionContent}
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'home.explain.point1.content',
                message: `<p>By continuing to contribute helpful and authentic dining experiences, you will earn experience points and increase your income, and you also act as a validator by verifying whether other people's comments are helpful.</p><p>Fooday’s unique tokenomics system rewards users for their contributions, but only after they have acquired an NFT.</p>`,
              }),
            }}
          />
        </section>

        <section className={styles.explainSectionStyle2}>
          <img className={styles.explainSectionImage} src="/img/how-it-works2.svg" />
          <h1
            className={styles.explainSectionTitle}
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'home.explain.point2.title',
                message: `<span>Unique <span class="foo-highlight-bg">Reputation-Coin</span> tokenomics</span>`,
              }),
            }}
          />
          <div
            className={styles.explainSectionContent}
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'home.explain.point2.content',
                message: `<p>By continuing to contribute helpful and authentic dining experiences, you will earn experience points and increase your income, and you also act as a validator by verifying whether other people's comments are helpful.</p>`,
              }),
            }}
          />
        </section>

        <section className={clsx(styles.explainSection3, styles.explainSectionStyle1)}>
          <div className={clsx(styles.explainSection3Image, styles.explainSectionImage)} />
          <h1
            className={styles.explainSectionTitle}
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'home.explain.point3.title',
                message: `<span>Use of <span class="foo-highlight-bg">NFTs</span> to Prevent Fraud or Malicious Behaviors</span>`,
              }),
            }}
          />
          <div
            className={styles.explainSectionContent}
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'home.explain.point3.content',
                message: `<p>Fooday’s NFTs serve multiple purposes. They can be used to level-up and customize a Foodie’s profile, showcasing their personality and expertise within the community. Additionally, NFTs can also serve as collateral, ensuring that Foodies act in good faith and maintain the integrity of the platform. Any Foodie found to be in violation of the platform’s guidelines may have their NFT impacted as a result.</p>`,
              }),
            }}
          />
        </section>

        <section className={styles.explainSectionStyle2}>
          <img className={styles.explainSectionImage} src="/img/how-it-works4.svg" />
          <h1
            className={styles.explainSectionTitle}
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'home.explain.point4.title',
                message: `<span>A <span class="foo-highlight-bg">P2P</span> Validation System</span>`,
              }),
            }}
          />
          <div
            className={styles.explainSectionContent}
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'home.explain.point4.content',
                message: `<p>Fooday’s platform also features a verification system and p2p validation, ensuring that all reviews are genuine and unbiased. This helps to provide Foodies with trustworthy and accurate information.</p>`,
              }),
            }}
          />
        </section>

        <div className={styles.explainArrow}>
          <img src="/img/explain-deco-arrow-down.svg" />
        </div>

        <section className={styles.explainSection5}>
          <div className={styles.explainSectionContent}>
            <div
              dangerouslySetInnerHTML={{
                __html: translate({
                  id: 'home.explain.result.desc',
                  message: `<p>By offering these solutions, Fooday aims to provide Foodies with a more trustworthy and accurate source of information, helping them discover the best food experiences and connect with like-minded individuals in the process.</p>`,
                }),
              }}
            />
            <ul>
              <li>
                <span className="foo-underline">
                  <Translate id="home.explain.result.point1">Truthful</Translate>
                </span>
              </li>
              <li>
                <span className="foo-underline">
                  <Translate id="home.explain.result.point2">Helpful</Translate>
                </span>
              </li>
              <li>
                <span className="foo-underline">
                  <Translate id="home.explain.result.point3">Validated</Translate>
                </span>
              </li>
              <li>
                <span className="foo-underline">
                  <Translate id="home.explain.result.point4">Rewardable</Translate>
                </span>
              </li>
            </ul>
          </div>
          <img className={styles.explainSectionImage} src="/img/how-it-result.svg" />
          <div className={styles.explainLearnMore}>
            <button>
              <Translate id="home.explain.result.learnMore">Learn more about the tokenomics</Translate>
            </button>
          </div>
        </section>
      </section>

      <section className={clsx(styles.ecosystem, 'foo-home-container')}>
        <h1 className={clsx('foo-home-section-title', styles.ecosystemTitle)}>
          <Translate id="home.ecosystem.title">Ecosystem</Translate>
        </h1>
        <img src="/img/ecosystem.svg" />
      </section>

      <section className={clsx(styles.team, 'foo-home-container')}>
        <h1 className={clsx('foo-home-section-title', styles.teamTitle)}>
          <Translate id="home.team.title">Meet The Team</Translate>
        </h1>
        <p className={styles.teamDesc}>
          <Translate id="home.team.desc">
            By continuing to contribute helpful and authentic dining experiences, you will earn experience points and
            increase your income, and you also act as a validator by verifying whether other people's comments are
            helpful.
          </Translate>
        </p>
        <ul className={styles.teamMembers}>
          <li>
            <img src="/img/avatar-ken.svg" />
            <span className={styles.teamMemberName}>Ken</span>
            <span className={styles.teamMemberTitle}>Founder</span>
          </li>
          <li>
            <img src="/img/avatar-ken.svg" />
            <span className={styles.teamMemberName}>Ken</span>
            <span className={styles.teamMemberTitle}>Founder</span>
          </li>
          <li>
            <img src="/img/avatar-ken.svg" />
            <span className={styles.teamMemberName}>Ken</span>
            <span className={styles.teamMemberTitle}>Founder</span>
          </li>
          <li>
            <img src="/img/avatar-ken.svg" />
            <span className={styles.teamMemberName}>Ken</span>
            <span className={styles.teamMemberTitle}>Founder</span>
          </li>
          <li>
            <img src="/img/avatar-ken.svg" />
            <span className={styles.teamMemberName}>Ken</span>
            <span className={styles.teamMemberTitle}>Founder</span>
          </li>
          <li>
            <img src="/img/avatar-ken.svg" />
            <span className={styles.teamMemberName}>Ken</span>
            <span className={styles.teamMemberTitle}>Founder</span>
          </li>
          <li>
            <img src="/img/avatar-ken.svg" />
            <span className={styles.teamMemberName}>Ken</span>
            <span className={styles.teamMemberTitle}>Founder</span>
          </li>
          <li>
            <img src="/img/avatar-ken.svg" />
            <span className={styles.teamMemberName}>Ken</span>
            <span className={styles.teamMemberTitle}>Founder</span>
          </li>
        </ul>
      </section>

      <section className={styles.waitlist}>
        <div className="foo-home-container">
          <div className={styles.waitlistContent}>
            <h1 className={styles.waitlistTitle}>
              <Translate>Become the Earliest Contributor to Eat & Earn</Translate>
            </h1>
            <p>
              <Translate>Get a head start on the Fooday revolution and join the selected few now!</Translate>
            </p>

            <form className={styles.waitlistForm}>
              <div>
                <label for="email-input" className={styles.waitlistFormLabel}>
                  <Translate>Email address</Translate>
                </label>
                <div className="foo-input">
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={email}
                    placeholder="your_email@fooday.app"
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label for="ig-account-input" className={styles.waitlistFormLabel}>
                  <Translate>Instagram account (optional)</Translate>
                </label>
                <div className={clsx(styles.igInput, 'foo-input')}>
                  <span>@</span>
                  <input
                    id="ig-account-input"
                    placeholder="instagram account"
                    value={igAccount}
                    onChange={e => setIgAccount(e.target.value)}
                  />
                </div>
                <div className={styles.waitlistIgNote}>
                  <YellowArrowIcon width="20px" height="10px" />
                  <div className={styles.waitlistIgNoteBody}>
                    <span className={styles.waitlistIgNoteTitle}>
                      <Translate id="home.waitlist.igNoteTitle">Are you a foodie?</Translate>
                    </span>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: translate({
                          id: 'home.waitlist.igNoteContent',
                          message: `<p>Feel free to provide your Instagram account. If you are eligible as an influencing foodie, you may receive a camera NFT <span class="foo-hightlight-blue">for free!</span></p>`,
                        }),
                      }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <button type="submit" className={styles.waitlistSubmitButton} onClick={joinWaitlist}>
                  <Translate id="home.waitlist.submit">Join Waitlist</Translate>
                </button>
              </div>
            </form>
          </div>
          <img className={styles.waitlistImage} src="/img/bottom-form.svg" />
        </div>
      </section>
    </main>
  )
}
