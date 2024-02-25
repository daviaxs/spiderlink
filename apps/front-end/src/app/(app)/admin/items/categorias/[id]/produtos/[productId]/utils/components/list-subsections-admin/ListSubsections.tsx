import { Skeleton } from '@/shared/components/skeleton/Skeleton'
import { useContext, useEffect } from 'react'
import {
  ListSubsectionsAdminRoot,
  ListSubsectionsItems,
} from './ListSubsections.style'
import { useParams } from 'next/navigation'
import { SubsectionsContext } from '@/shared/contexts/Subsections'
import { SubsectionItem } from '../subsection-item'
import { ExternalLink, Pencil } from 'lucide-react'
import { DeleteSubsectionForm } from './utils/DeleteSubsectionForm'

export function ListSubsectionsAdmin() {
  const { fetchSubsections, subsections, loading } =
    useContext(SubsectionsContext)
  const { productId } = useParams()

  useEffect(() => {
    if (productId) {
      fetchSubsections(productId as string)
    }
  }, [fetchSubsections, productId])

  return (
    <ListSubsectionsAdminRoot>
      {loading
        ? Array.from({ length: 20 }).map((_, index) => (
            <Skeleton
              key={index}
              width="100%"
              height="3rem"
              $borderRadius={0.375}
            />
          ))
        : subsections.map((subsection) => (
            <ListSubsectionsItems key={subsection.id}>
              <SubsectionItem.Root>
                <SubsectionItem.Infos>
                  <SubsectionItem.Name>{subsection.name}</SubsectionItem.Name>

                  <div className="badges">
                    <SubsectionItem.Badge
                      title="LMT:"
                      content={subsection.limit.toString()}
                    />
                    {subsection.required === true && (
                      <SubsectionItem.Badge content="obgt" />
                    )}

                    {subsection.multipleChoice === true && (
                      <SubsectionItem.Badge content="mult" />
                    )}
                  </div>
                </SubsectionItem.Infos>

                <SubsectionItem.Actions>
                  <SubsectionItem.Button>
                    <ExternalLink />
                  </SubsectionItem.Button>

                  <SubsectionItem.Button>
                    <Pencil />
                  </SubsectionItem.Button>

                  <DeleteSubsectionForm
                    name={subsection.name}
                    subsectionId={subsection.id}
                  />
                </SubsectionItem.Actions>
              </SubsectionItem.Root>
            </ListSubsectionsItems>
          ))}
    </ListSubsectionsAdminRoot>
  )
}
