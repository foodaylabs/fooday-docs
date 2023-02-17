import React from 'react'
import Layout from '@site/src/components/Layout'
import HomeView from '@site/src/views/HomeView'
import Head from '@docusaurus/Head'
import ApiProvider from '@site/src/contexts/Api'
import WaitlistProvider from '@site/src/contexts/Waitlist'
import { translate } from '@docusaurus/Translate'

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
          </Head>
          <HomeView />
        </Layout>
      </WaitlistProvider>
    </ApiProvider>
  )
}
