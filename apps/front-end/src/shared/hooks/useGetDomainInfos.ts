import { useContext } from 'react'
import { DomainInfosContext } from '../contexts/DomainInfos'

export function useGetDomainInfos() {
  const domainInfos = useContext(DomainInfosContext)
  if (!domainInfos) {
    throw new Error(
      'useGetDomainInfos must be used within a DomainInfosProvider',
    )
  }

  return domainInfos
}
