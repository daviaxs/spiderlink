import { api } from '@/lib/axios'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface DomainInfos {
  domainName: string
  name: string
  phone: string
  cep: string
  address: string
  cnpj: string
  deliveryTime: string
}

export const DomainInfosContext = createContext({} as DomainInfos)

export function DomainInfosProvider({ children }: { children: ReactNode }) {
  const [domainInfos, setDomainInfos] = useState<DomainInfos>({
    name: 'carregando',
    phone: '00-0000-0000',
    cep: '00000-000',
    address: 'carregando',
    cnpj: '00.000.000/0000-00',
    deliveryTime: 'carregando',
    domainName: 'carregando',
  })

  useEffect(() => {
    api
      .get(`/domains/${process.env.NEXT_PUBLIC_DOMAIN_ID}`)
      .then((response) => {
        const data = response.data.domain

        setDomainInfos({
          name: data.name,
          phone: data.phone,
          cep: data.cep,
          address: data.address,
          cnpj: data.cnpj,
          deliveryTime: data.deliveryTime,
          domainName: data.domainName,
        })
      })
  }, [])

  return (
    <DomainInfosContext.Provider value={domainInfos}>
      {children}
    </DomainInfosContext.Provider>
  )
}
