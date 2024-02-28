import * as Accordion from '@radix-ui/react-accordion'
import { Content, Item, Trigger } from './SubsectionAccordion.style'
import { Subsection } from '@/shared/contexts/Subsections'
import { ChevronDown } from 'lucide-react'
import { Text } from '@/shared/components/text/Text'
import { roboto } from '@/shared/style/theme/fonts'

interface SubsectionAccordionProps {
  subsections: Subsection[]
}

export function SubsectionAccordion({ subsections }: SubsectionAccordionProps) {
  return (
    <Accordion.Root type="multiple" style={{ width: '100%' }}>
      {subsections.map((subsection) => (
        <Item key={subsection.id} value={subsection.id}>
          <Trigger>
            <div className="infos">
              <Text
                size={20}
                $weight="600"
                className={roboto.className}
                $whiteSpace="nowrap"
              >
                {subsection.name}
              </Text>

              <Text size={14} $weight="500" className="description-quantity">
                {subsection.Options.length > 1
                  ? `Selecione até ${subsection.Options.length} opções`
                  : `Selecione ${subsection.Options.length} opção`}
              </Text>
            </div>

            <div className="infos2">
              {subsection.required && (
                <Text
                  size={14}
                  $weight="500"
                  className="required"
                  fontVariant="all-small-caps"
                >
                  Obrigatório
                </Text>
              )}

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
