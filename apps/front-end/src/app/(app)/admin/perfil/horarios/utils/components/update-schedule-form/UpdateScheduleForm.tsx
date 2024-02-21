'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { DayWeekEditButton } from '../../../Schedules.style'
import { Check, Pencil, X } from 'lucide-react'
import { Text } from '@/shared/components/text/Text'
import { Close, Content, Overlay, Trigger } from './Form.style'
import { SpanContainer } from '@/shared/components/spanContainer/SpanContainer.style'
import { useTheme } from 'styled-components'
import { FormProvider } from 'react-hook-form'
import { Form } from '@/shared/components/form'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { Loading } from '@/shared/components/loading/Loading'
import { DaySchedule } from '../day-schedule'
import { useUpdateSchedules } from '@/shared/hooks/domainValues/useUpdateSchedules'
import { Separator } from '@/shared/components/separator/Separator.style'

interface DayScheduleFormProps {
  dayName: 'seg' | 'ter' | 'qua' | 'qui' | 'sex' | 'sab' | 'dom'
  schedule: {
    inicio: string
    termino: string
    fechado: boolean
  }
}

export function DayScheduleForm({ dayName, schedule }: DayScheduleFormProps) {
  const { errorMessage, loading, methods, successMessage, updateSchedules } =
    useUpdateSchedules()
  const theme = useTheme()

  return (
    <Dialog.Root>
      <Trigger>
        <DayWeekEditButton>
          <Text size={18} $weight="600">
            Editar
          </Text>
          <Pencil color={theme.iconSecondary} />
        </DayWeekEditButton>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <SpanContainer $align="center" $gap={0.5}>
            <Text size={32} $weight="600" $textalign="center">
              Editar Horário: {dayName}
            </Text>
            <SpanContainer $align="center" $gap={0.4}>
              <Text
                size={16}
                $weight="400"
                color={theme.description}
                $textalign="center"
              >
                Edite os horários no formato &quot;HHMM&quot;.
              </Text>
              <Text
                size={16}
                $weight="400"
                color={theme.description}
                $textalign="center"
              >
                Se desejar fechar o dia, insira &quot;0000&quot; nos campos e
                marque a opção de fechado.
              </Text>
            </SpanContainer>
          </SpanContainer>

          <FormProvider {...methods}>
            <Form.Content onSubmit={methods.handleSubmit(updateSchedules)}>
              <DaySchedule.FormContent>
                <DaySchedule.Inputs>
                  <DaySchedule.StartInput
                    type="text"
                    name={schedule.inicio}
                    day={dayName}
                    register={methods.register(`${dayName}.inicio`)}
                  />

                  <span>-</span>

                  <DaySchedule.FinishInput
                    type="text"
                    name={schedule.termino}
                    day={dayName}
                    register={methods.register(`${dayName}.termino`)}
                  />
                </DaySchedule.Inputs>

                <Separator direction="vertical" height="2rem" />

                <DaySchedule.Closed
                  name={`${dayName}.fechado`}
                  register={methods.register(`${dayName}.fechado`)}
                />
              </DaySchedule.FormContent>

              {errorMessage && <Text size={16}>{errorMessage}</Text>}

              <ButtonForm
                type="submit"
                size="full"
                color="primary"
                disabled={
                  !methods.formState.isValid ||
                  methods.formState.isSubmitting ||
                  successMessage ||
                  loading
                }
              >
                {loading ? <Loading /> : successMessage ? <Check /> : 'Salvar'}
              </ButtonForm>
            </Form.Content>
          </FormProvider>

          <Close>
            <X color={theme.icon} size={32} />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
