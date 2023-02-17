import React from 'react'
import Layout from '@site/src/components/Layout'
import HomeView from '@site/src/views/HomeView'
import Head from '@docusaurus/Head'
import ApiProvider from '@site/src/contexts/Api'
import WaitlistProvider from '@site/src/contexts/Waitlist'

export default function Home() {
  return (
    <ApiProvider>
      <WaitlistProvider>
        <Layout>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <meta property="og:image" content="/img/og-image.jpg" />
          </Head>
          <HomeView />
        </Layout>
      </WaitlistProvider>
    </ApiProvider>
  )
}
