import React, { createContext, useMemo, useContext } from 'react'
import axios from 'axios'
import { Api } from '@site/src/api'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

const apiContext = createContext()

export default function ApiProvider({ children }) {
  const { Provider } = apiContext
  const { siteConfig } = useDocusaurusContext()
  const baseURL = siteConfig.customFields?.apiEndpoint ?? ''
  const api = useMemo(
    () =>
      new Api(
        axios.create({
          baseURL,
        })
      ),
    [baseURL]
  )

  return <Provider value={api}>{children}</Provider>
}

export const useApi = () => {
  const api = useContext(apiContext)
  if (!api) {
    throw new Error('Please wrap toyr components with ApiProvider')
  }
  return api
}
