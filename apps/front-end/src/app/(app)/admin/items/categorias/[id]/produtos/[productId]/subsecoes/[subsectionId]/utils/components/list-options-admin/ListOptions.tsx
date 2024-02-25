import { Skeleton } from '@/shared/components/skeleton/Skeleton'
import { useContext, useEffect } from 'react'
import {
  ItemInfo,
  ListOptionsAdminRoot,
  OptionItemActions,
  OptionItemAdmin,
  OptionItemInfos,
} from './ListOptions.style'
import { Text } from '@/shared/components/text/Text'
import { useParams } from 'next/navigation'
import { OptionsContext } from '@/shared/contexts/Options'
import { convertPriceToBRFormat } from '@/shared/functions/convertPriceToBRFormat'
import { Pencil } from 'lucide-react'
import { DeleteOptionForm } from './utils/DeleteOptionForm'

export function ListOptionsAdmin() {
  const { loading, options, setSubsectionId } = useContext(OptionsContext)
  const { subsectionId } = useParams()

  useEffect(() => {
    if (subsectionId) {
      setSubsectionId(subsectionId as string)
    }
  }, [subsectionId, setSubsectionId])

  function formatDescription(description: string) {
    if (description.length > 30) {
      return `${description.slice(0, 30)}...`
    }

    return description
  }

  return (
    <ListOptionsAdminRoot>
      {loading
        ? Array.from({ length: 20 }).map((_, index) => (
            <Skeleton
              key={index}
              width="100%"
              height="3rem"
              $borderRadius={0.375}
            />
          ))
        : options.map((option) => (
            <OptionItemAdmin key={option.id}>
              <OptionItemInfos>
                <ItemInfo>
                  <Text size={24} $weight="600" fontVariant="all-small-caps">
                    Nome:
                  </Text>

                  <Text size={18}>{option.name}</Text>
                </ItemInfo>

                <ItemInfo>
                  <Text size={24} $weight="600" fontVariant="all-small-caps">
                    Descrição:
                  </Text>

                  {option.description ? (
                    <Text size={18} $whiteSpace="nowrap">
                      {formatDescription(option.description)}
                    </Text>
                  ) : (
                    <Text size={18} className="not-description">
                      Sem descrição.
                    </Text>
                  )}
                </ItemInfo>

                <ItemInfo>
                  <Text size={24} $weight="600" fontVariant="all-small-caps">
                    Preço:
                  </Text>

                  <Text size={18}>{convertPriceToBRFormat(option.price)}</Text>
                </ItemInfo>
              </OptionItemInfos>

              <OptionItemActions>
                <button className="ActionButton">
                  <Pencil />
                </button>

                <span className="separator" />

                <DeleteOptionForm name={option.name} optionId={option.id} />
              </OptionItemActions>
            </OptionItemAdmin>
          ))}
    </ListOptionsAdminRoot>
  )
}
