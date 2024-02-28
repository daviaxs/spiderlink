import * as Accordion from '@radix-ui/react-accordion'
import { Content, Item, Trigger } from './SubsectionAccordion.style'
import { Subsection } from '@/shared/contexts/Subsections'
import { ChevronDown } from 'lucide-react'
import { Title } from './utils/Title'
import { DescriptionQuantity } from './utils/DescriptionQuantity'
import { Required } from './utils/Required'

interface SubsectionAccordionProps {
  subsections: Subsection[]
}

export function SubsectionAccordion({ subsections }: SubsectionAccordionProps) {
  const sortedSubsections = [...subsections].sort((a, b) =>
    b.required === a.required ? 0 : b.required ? 1 : -1,
  )

  return (
    <Accordion.Root type="multiple" style={{ width: '100%' }}>
      {sortedSubsections.map((subsection) => (
        <Item key={subsection.id} value={subsection.id}>
          <Trigger>
            <div className="infos">
              <Title>{subsection.name}</Title>

              <DescriptionQuantity subsection={subsection} />
            </div>

            <div className="infos2">
              {subsection.required && <Required />}

              <ChevronDown className="icon" />
            </div>
          </Trigger>

          <Content>
            {subsection.Options.map((option) => (
              <div key={option.id}>
                <div>{option.name}</div>
                <div>{option.name}</div>
                <div>{option.name}</div>
                <div>{option.name}</div>
                <div>{option.name}</div>
                <div>{option.name}</div>
                <div>{option.name}</div>
              </div>
            ))}
          </Content>
        </Item>
      ))}
    </Accordion.Root>
  )
}
