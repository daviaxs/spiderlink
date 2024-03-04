import * as Dialog from '@radix-ui/react-dialog'
import { Close, Overlay } from '../DialogBase.style'
import { X } from 'lucide-react'
import { useContext, useState } from 'react'
import { Text } from '../text/Text'
import { CartContext } from '@/shared/contexts/cart-context/CartContext'
import { Content } from './CheckoutMenu.style'
import { ButtonForm } from '../buttons/button-form/ButtonForm'
import { DeliverySelection } from './checkout-steps/delivery-selection/DeliverySelection'
import { PaymentSelection } from './checkout-steps/payment-selection/PaymentSelection'
import { Actions } from './checkout-steps/defaultStyle'
import { MoneySelected } from './checkout-steps/payment-selection/money-selected/MoneySelected'
import { Change } from './checkout-steps/payment-selection/money-selected/Change'
import { VerifyUserData } from './checkout-steps/verify-user-data/VerifyUserData'
import { FinishCheckout } from './checkout-steps/finish-checkout/FinishCheckout'

export interface CheckoutStepsProps {
  onNext: (step: number) => void
}

export function CheckoutMenu() {
  const { isCheckoutDialogOpen, closeCheckoutDialog } = useContext(CartContext)
  const [step, setStep] = useState(0)
  const [history, setHistory] = useState([0])

  const nextStep = (nextStep: number) => {
    setStep(nextStep)
    setHistory((prev) => [...prev, nextStep])
  }

  const previousStep = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1)
      setHistory(newHistory)
      setStep(newHistory[newHistory.length - 1])
    }
  }

  function finishCheckout() {
    window.alert('Compra finalizada!')
  }

  return (
    <Dialog.Root open={isCheckoutDialogOpen}>
      <Dialog.Portal>
        <Overlay onClick={closeCheckoutDialog} />

        <Content>
          {step === 0 && (
            <Text as="h2" size={28} $weight="800" $textalign="center">
              Quase lá!
            </Text>
          )}

          {/**
           * Etapas do checkout
           * 0 - Seleção de entrega
           * 1 - Seleção de pagamento
           * 2 - Dinheiro selecionado
           * 3 - Troco
           * 4 - Verificação de dados
           * 5 - Finalização
           */}

          {step === 0 && <DeliverySelection onNext={nextStep} />}

          {step === 1 && <PaymentSelection onNext={nextStep} />}

          {step === 2 && <MoneySelected onNext={nextStep} />}

          {step === 3 && <Change onNext={nextStep} />}

          {step === 4 && <VerifyUserData onNext={nextStep} />}

          {step === 5 && <FinishCheckout />}

          <Actions>
            {step === 5 && (
              <ButtonForm onClick={finishCheckout} size="full">
                Finalizar compra
              </ButtonForm>
            )}

            {step !== 0 && (
              <ButtonForm onClick={previousStep} size="full" color="primary">
                Voltar
              </ButtonForm>
            )}
          </Actions>

          <Close onClick={closeCheckoutDialog}>
            <X size={32} />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
