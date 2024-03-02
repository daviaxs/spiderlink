import { ReactNode, createContext, useEffect, useState } from 'react'

interface DomainInfos {
  domainName: string
  name: string
  phone: string
  cep: string
  address: string
  cnpj: string
  deliveryTime: string
  deliveryCost: number
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
    deliveryCost: 0,
    domainName: 'carregando',
  })

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/domains/${process.env.NEXT_PUBLIC_DOMAIN_ID}`,
      {
        next: {
          revalidate: 1800, // 30 minutes
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        const domainData = data.domain

        setDomainInfos({
          name: domainData.name,
          phone: domainData.phone,
          cep: domainData.cep,
          address: domainData.address,
          cnpj: domainData.cnpj,
          deliveryTime: domainData.deliveryTime,
          domainName: domainData.domainName,
          deliveryCost: domainData.deliveryCost,
        })
      })
  }, [])

  return (
    <DomainInfosContext.Provider value={domainInfos}>
      {children}
    </DomainInfosContext.Provider>
  )
}
