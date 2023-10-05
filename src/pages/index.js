import React, { useEffect } from 'react'
import Layout from '@site/src/components/Layout'
import HomeView from '@site/src/views/HomeView'
import Head from '@docusaurus/Head'
import ApiProvider from '@site/src/contexts/Api'
import WaitlistProvider from '@site/src/contexts/Waitlist'
import { translate } from '@docusaurus/Translate'
import heroImageUrl from '@site/static/img/hero.webp'

export default function Home() {
  return (
    <ApiProvider>
      <WaitlistProvider>
        <Layout>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <meta
              name="description"
              content={translate({
                id: 'home.pageDesc',
                message: ' A community-driven platform rewarding everyone for contributing helpful food information.',
              })}
            />
            <meta
              name="og:title"
              content={translate({
                id: 'home.pageTitle',
                message: 'Fooday | Foodies United: Leave Reviews, Earn Rewards',
              })}
            />
            <title>
              {translate({
                id: 'home.pageTitle',
                message: 'Fooday | Foodies United: Leave Reviews, Earn Rewards',
              })}
            </title>
            <link
              rel="preload"
              href="/fonts/NeverMind/NeverMind-Regular.woff2"
              as="font"
              type="font/woff2"
              crossorigin
            />
            <link
              rel="preload"
              href="/fonts/NeverMind/NeverMind-Medium.woff2"
              as="font"
              type="font/woff2"
              crossorigin
            />
            <link
              rel="preload"
              href="/fonts/NeverMind/NeverMind-DemiBold.woff2"
              as="font"
              type="font/woff2"
              crossorigin
            />
            <link rel="preload" href="/fonts/NeverMind/NeverMind-Thin.woff2" as="font" type="font/woff2" crossorigin />
            <link rel="preload" href={heroImageUrl} as="image" type="image/webp" media="(min-width: 769px)" />
            <link rel="stylesheet" href="/landing.css" as="style" />
            <link rel="stylesheet" href="/fonts/NeverMind/stylesheet.css" as="style" />
          </Head>
          <HomeView />
        </Layout>
      </WaitlistProvider>
    </ApiProvider>
  )
}
