import { Skeleton } from '@/shared/components/skeleton/Skeleton'
import { useContext, useEffect } from 'react'
import { ListSubsectionsAdminRoot } from './ListSubsections.style'
import { useParams } from 'next/navigation'
import { SubsectionsContext } from '@/shared/contexts/Subsections'
import { SubsectionItem } from '../subsection-item'
import { ExternalLink } from 'lucide-react'
import { DeleteSubsectionForm } from './utils/DeleteSubsectionForm'
import { UpdateSubsectionForm } from '../update-sebusection-form/UpdateSubsectionForm'
import Link from 'next/link'

export function ListSubsectionsAdmin() {
  const { subsections, loading, setProductId } = useContext(SubsectionsContext)
  const { id, productId } = useParams()

  useEffect(() => {
    if (productId) {
      setProductId(productId as string)
    }
  }, [productId, setProductId])

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
            <SubsectionItem.Root key={subsection.id}>
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
                <Link
                  href={`/admin/items/categorias/${id}/produtos/${productId}/subsecoes/${subsection.id}`}
                  style={{ width: 'fit-content' }}
                >
                  <SubsectionItem.Button>
                    <ExternalLink />
                  </SubsectionItem.Button>
                </Link>

                <UpdateSubsectionForm subsectionId={subsection.id} />

                <DeleteSubsectionForm
                  name={subsection.name}
                  subsectionId={subsection.id}
                />
              </SubsectionItem.Actions>
            </SubsectionItem.Root>
          ))}
    </ListSubsectionsAdminRoot>
  )
}
