import * as Accordion from '@radix-ui/react-accordion'
import { Content, Item, Trigger } from './SubsectionAccordion.style'
import { Subsection } from '@/shared/contexts/Subsections'
import { ChevronDown } from 'lucide-react'
import { Title } from './utils/Title'
import { DescriptionQuantity } from './utils/DescriptionQuantity'
import { Required } from './utils/Required'
import { AnimatePresence, motion } from 'framer-motion'

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
            <AnimatePresence>
              {subsection.Options.map((option) => (
                <motion.div
                  key={option.id}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: '1px' },
                  }}
                  transition={{ duration: 0.5, ease: [0.08, 0.62, 0.23, 0.98] }}
                >
                  <div>{option.name}</div>
                  <div>{option.name}</div>
                  <div>{option.name}</div>
                  <div>{option.name}</div>
                  <div>{option.name}</div>
                  <div>{option.name}</div>
                  <div>{option.name}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </Content>
        </Item>
      ))}
    </Accordion.Root>
  )
}
