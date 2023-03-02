import Translate, { translate } from '@docusaurus/Translate'
import clsx from 'clsx'
import React, { useRef } from 'react'
import Countdown from '@site/src/components/Countdown'
import styles from './homeview.module.css'
import BoomIcon from '@site/static/img/problems-bomb.svg'
import FakeReviewsIcon from '@site/static/img/problems-fake-reviews.svg'
import NoIncentiveIcon from '@site/static/img/problems-no-incentive.svg'
import SolutionValidateIcon from '@site/static/img/solution-validate.svg'
import SolutionKeepUpdateIcon from '@site/static/img/solution-keep-update.svg'
import SolutionNewSpotsIcon from '@site/static/img/solution-new-spots.svg'
import SolutionWritingIcon from '@site/static/img/solution-writing.svg'
import FoodIcon from '@site/static/img/food.svg'
import FudosIcon from '@site/static/img/fudos.svg'
import WaitlistForm from '@site/src/components/WaitlistForm'
import { useWaitlist } from '@site/src/contexts/Waitlist'
import Marquee from 'react-fast-marquee'
import Link from '@docusaurus/Link'

const END_TIME = new Date('2023-04-17T23:59:59.999Z')
const clamHolderStageStartTime = new Date('2023-02-18T16:00:00Z')
// const publicStageStartTime = new Date('2023-02-25T16:00:00Z')

export default function HomeView() {
  const emailRef = useRef()
  const waitlist = useWaitlist()
  const afterClamStage = Date.now() >= clamHolderStageStartTime.getTime()

  const openPopup = () => {
    waitlist.openPopup(emailRef.current?.value)
  }

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
                ref={emailRef}
                type="email"
                placeholder={translate({ id: 'home.hero.emailPlaceholder', message: 'your_email@fooday.app' })}
              />
              <button className={styles.heroButton} onClick={openPopup}>
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
              {afterClamStage && (
                <Translate id="home.countdown.clamHolderStage.counterTitle">CLAM Holder Presale Countdown</Translate>
              )}
              {!afterClamStage && (
                <Translate id="home.countdown.publicStage.counterTitle">CLAM Holder Presale Coming In</Translate>
              )}
            </h2>
            <Countdown targetDate={END_TIME} />
            <div
              className={styles.countdownCounterNote}
              dangerouslySetInnerHTML={{
                __html: translate(
                  {
                    id: 'home.countdown.counterNote',
                    message: `<p>CLAM Holder Sale: {start} ~ {end}<br /></p>`,
                  },
                  {
                    start: clamHolderStageStartTime.toLocaleString(),
                    end: END_TIME.toLocaleString(),
                  }
                ),
              }}
            ></div>
          </div>
        </div>
      </section>

      <section className={clsx(styles.problems, 'foo-home-container')}>
        <h1 className={clsx(styles.problemsTitle, 'foo-home-section-title')}>
          <Translate id="home.problems.title">Problems</Translate>
        </h1>
        <img className={styles.problemsImage} src="/img/problems.webp" />
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
              <Translate id="home.problems.problem2.title">No Incentive to Leave Reviews</Translate>
            </h1>
            <p className={styles.problemsSectionContent}>
              <Translate id="home.problems.problem2.desc">
                Writing a post takes time and effort. Even when people do, they usually leave a simple review without
                rich content, which is generally not helpful to others.
              </Translate>
            </p>
          </section>
          <section className={styles.problemsSection}>
            <BoomIcon className={styles.problemsSectionIcon} />
            <h1 className={styles.problemsSectionTitle}>
              <Translate id="home.problems.problem3.title">Review Bombs by Media Framing</Translate>
            </h1>
            <p className={styles.problemsSectionContent}>
              <Translate id="home.problems.problem3.desc">
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
          <img className={styles.explainSectionImage} src="/img/how-it-works1.webp" />
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
          <img className={styles.explainSectionImage} src="/img/how-it-works2.webp" />
          <h1
            className={styles.explainSectionTitle}
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'home.explain.point2.title',
                message: `<span>Unique <span class="foo-highlight-bg">Reputation-Coin</span> tokenomics</span>`,
              }),
            }}
          />
          <div className={styles.explainSectionContent}>
            <div className={styles.explainSectionContentFudos}>
              <h2 className={styles.explainSectionContentTitle}>
                <FudosIcon width={60} height={60} /> FUDOS
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: translate({
                    id: 'home.explain.point2.explainSectionContent.fudos',
                    message:
                      '<p>Once you have a Fooday Camera NFT, you can start earning Fudos, a credit point, for your contributions to the platform. Your account will be leveled up automatically as your FUDOS accumulate. The higher your level, the more your settled $FOOD will be multiplied.</p>',
                  }),
                }}
              ></div>
            </div>
            <div className={styles.explainSectionContentFood}>
              <h2 className={styles.explainSectionContentTitle}>
                <FoodIcon width={60} height={60} />
                $FOOD
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: translate({
                    id: 'home.explain.point2.explainSectionContent.food',
                    message:
                      '<p>After a certain period, You will have the opportunity to convert your Fudos into $Food, which can be used to upgrade your camera NFT within the platform or traded on cryptocurrency exchanges.</p>',
                  }),
                }}
              />
            </div>
          </div>
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
          <img className={styles.explainSectionImage} src="/img/how-it-works4.webp" />
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
          <img className={styles.explainSectionImage} src="/img/how-it-result.webp" />
          <div className={styles.explainLearnMore}>
            <Link to="https://fooday.medium.com/foodays-tokenomics-eat-share-and-earn-dd67f95ce398">
              <Translate id="home.explain.result.learnMore">Learn more about the tokenomics</Translate>
            </Link>
          </div>
        </section>
      </section>

      <section className={clsx(styles.ecosystem, 'foo-home-container')}>
        <h1 className={clsx('foo-home-section-title', styles.ecosystemTitle)}>
          <Translate id="home.ecosystem.title">Ecosystem</Translate>
        </h1>
        <img
          src={translate({
            id: 'home.ecosystem.image',
            message: '/img/ecosystem.webp',
          })}
        />
      </section>

      <section className={clsx(styles.team, 'foo-home-container')}>
        <h1 className={clsx('foo-home-section-title', styles.teamTitle)}>
          <Translate id="home.team.title">Meet The Team</Translate>
        </h1>
        <p className={styles.teamDesc}>
          <Translate id="home.team.desc">
            Meet the talented and passionate team behind Fooday! Our diverse group of experts is dedicated to
            revolutionizing the restaurant review industry. Get to know our team and see how we're working together to
            bring Fooday to life.
          </Translate>
        </p>
        <ul className={styles.teamMembers}>
          <li>
            <img src="/img/avatar-ken.webp" width="170" height="170" />
            <span className={styles.teamMemberName}>Ken</span>
            <span className={styles.teamMemberTitle}>Developer</span>
          </li>
          <li>
            <img src="/img/avatar-appppo.webp" width="170" height="170" />
            <span className={styles.teamMemberName}>Appppo</span>
            <span className={styles.teamMemberTitle}>Designer</span>
          </li>
          <li>
            <img src="/img/avatar-ryder.webp" width="170" height="170" />
            <span className={styles.teamMemberName}>Ryder</span>
            <span className={styles.teamMemberTitle}>Developer</span>
          </li>
          <li>
            <img src="/img/avatar-pyc.webp" width="170" height="170" />
            <span className={styles.teamMemberName}>PYC</span>
            <span className={styles.teamMemberTitle}>Developer</span>
          </li>
          <li>
            <img src="/img/avatar-millie.webp" width="170" height="170" />
            <span className={styles.teamMemberName}>Millie</span>
            <span className={styles.teamMemberTitle}>Business Strategist</span>
          </li>
          <li>
            <img src="/img/avatar-jason.webp" width="170" height="170" />
            <span className={styles.teamMemberName}>Jason</span>
            <span className={styles.teamMemberTitle}>Artist</span>
          </li>
          <li>
            <img src="/img/avatar-malc.webp" width="170" height="170" />
            <span className={styles.teamMemberName}>mALc</span>
            <span className={styles.teamMemberTitle}>Moderator</span>
          </li>
          <li>
            <img src="/img/avatar-epi.webp" width="170" height="170" />
            <span className={styles.teamMemberName}>Epi</span>
            <span className={styles.teamMemberTitle}>Community Manager</span>
          </li>
          <li>
            <img src="/img/avatar-dungaboo.webp" width="170" height="170" />
            <span className={styles.teamMemberName}>Dungaboo</span>
            <span className={styles.teamMemberTitle}>Marketing</span>
          </li>
        </ul>
      </section>

      <section className={styles.waitlist}>
        <div className={styles.waitlistMarqueeLeft}>
          <Marquee gradientWidth="0px" speed={5}>
            BETA CLOSED BETA CLOSED BETA CLOSED BETA CLOSED BETA{' '}
          </Marquee>
        </div>
        <div className="foo-home-container">
          <WaitlistForm />
          <img className={styles.waitlistImage} src="/img/bottom-form.svg" />
        </div>
        <div className={styles.waitlistMarqueeRight}>
          <Marquee gradientWidth="0px" speed={5}>
            BETA CLOSED BETA CLOSED BETA CLOSED BETA CLOSED BETA{' '}
          </Marquee>
        </div>
      </section>
    </main>
  )
}
