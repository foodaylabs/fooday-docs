import React from 'react'
import Layout from '@site/src/components/Layout'
import HomeView from '@site/src/views/HomeView'
import Head from '@docusaurus/Head'

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <HomeView />
    </Layout>
  )
}
