import * as Accordion from '@radix-ui/react-accordion'
import {
  Content,
  Item,
  OptionActions,
  Trigger,
} from './SubsectionAccordion.style'
import { Subsection } from '@/shared/contexts/Subsections'
import { ChevronDown, Minus, Plus } from 'lucide-react'
import { Title } from './utils/Title'
import { DescriptionQuantity } from './utils/DescriptionQuantity'
import { AnimatePresence, motion } from 'framer-motion'
import { OptionInfos } from './utils/option/OptionInfos'
import { OptionDescription } from './utils/option/OptionDescription'
import { OptionPrice } from './utils/option/OptionPrice'
import { convertPriceToBRFormat } from '@/shared/functions/convertPriceToBRFormat'
import { AddOptionToCartButton } from './utils/option/add-option-to-cart-buttons/AddOptionToCartButton'
import { themeColors } from '@/shared/style/theme/pallete'

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
              <Title>
                <span>{subsection.name}</span>

                {subsection.required && (
                  <span style={{ color: themeColors['red-400'] }}>*</span>
                )}
              </Title>

              <DescriptionQuantity subsection={subsection} />
            </div>

            <ChevronDown className="icon" />
          </Trigger>

          <AnimatePresence>
            <Content>
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
                  className="option"
                >
                  <OptionInfos>
                    <Title size={18}>{option.name}</Title>

                    <OptionDescription>{option.description}</OptionDescription>

                    <OptionPrice>
                      + {convertPriceToBRFormat(option.price)}
                    </OptionPrice>
                  </OptionInfos>

                  <OptionActions>
                    <AddOptionToCartButton>
                      <Minus />
                    </AddOptionToCartButton>
                    <span>0</span>
                    <AddOptionToCartButton>
                      <Plus />
                    </AddOptionToCartButton>
                  </OptionActions>
                </motion.div>
              ))}
            </Content>
          </AnimatePresence>
        </Item>
      ))}
    </Accordion.Root>
  )
}
