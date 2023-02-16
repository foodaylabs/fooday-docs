import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import axios from 'axios'
import { useMemo } from 'react'
import { Api } from '@site/src/api'

export const useApi = () => {
  const { siteConfig } = useDocusaurusContext()
  const baseURL = siteConfig.customFields?.apiEndpoint ?? ''
  return useMemo(
    () =>
      new Api(
        axios.create({
          baseURL,
        })
      ),
    [baseURL]
  )
}
