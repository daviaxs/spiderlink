import * as Dialog from '@radix-ui/react-dialog'
import { Close, Overlay } from '../DialogBase.style'
import { X } from 'lucide-react'
import { useContext, useState } from 'react'
import { CartContext } from '@/shared/contexts/cart-context/CartContext'
import { Actions, Content } from './CheckoutMenu.style'
import { ButtonForm } from '../buttons/button-form/ButtonForm'
import { DeliverySelection } from './checkout-steps/delivery-selection/DeliverySelection'
import { PaymentSelection } from './checkout-steps/payment-selection/PaymentSelection'
import { MoneySelected } from './checkout-steps/payment-selection/money-selected/MoneySelected'
import { Change } from './checkout-steps/payment-selection/money-selected/Change'
import { VerifyUserData } from './checkout-steps/verify-user-data/VerifyUserData'
import { FinishCheckout } from './checkout-steps/finish-checkout/FinishCheckout'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { getLocalStorageItem } from '@/shared/functions/localStorage'
import {
  ECOMMERCE_NAME,
  SPIDER_LINK_USER_INFOS,
} from '@/shared/constants/names'
import { ProductProps } from '@/shared/contexts/cart-context/interfaces'
import { convertPriceToBRFormat } from '@/shared/functions/convertPriceToBRFormat'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'
import { DeliveryDetailsForm } from '@/shared/hooks/useDeliveryDetailsForm'

export interface CheckoutStepsProps {
  onNext: (step: number) => void
}

export function CheckoutMenu() {
  const { deliveryCost, deliveryTime } = useContext(DomainInfosContext)
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
      const previousStep = newHistory[newHistory.length - 1]

      setHistory(newHistory)
      setStep(previousStep)
    }
  }

  function finishCheckout() {
    const cartProducts = getLocalStorageItem(`${ECOMMERCE_NAME}-products-cart`)

    let orderMessage =
      '✅ NOVO PEDIDO\n-----------------------------\n▶ RESUMO DO PEDIDO\n\n'

    cartProducts.forEach((product: ProductProps, index: number) => {
      if (index !== 0) {
        orderMessage += '----------\n\n'
      }
      orderMessage += `*${product.productQuantity}x ${product.name}*\n\n`

      product.Subsection?.forEach((subsection, subsectionIndex) => {
        const selectedOptions = subsection.Options?.filter(
          (option) => option.quantity > 0,
        )

        if (selectedOptions) {
          orderMessage += `${subsection.name}:\n`
          selectedOptions.forEach((option) => {
            orderMessage += `• ${option.name} - QT: ${option.quantity}\n`
          })

          if (
            product.Subsection &&
            subsectionIndex < product.Subsection?.length - 1
          ) {
            orderMessage += '\n'
          }
        }
      })

      orderMessage += `\nSubtotal do item: ${convertPriceToBRFormat(Number(product.totalProductPrice))}\n\n`
    })

    const deliverySelected = getLocalStorageItem('step0-deliveryOption')
    const paymentOption = getLocalStorageItem('step1-paymentOption')
    const needChange = getLocalStorageItem('step2-needChange')
    const change = getLocalStorageItem('step3-change')

    orderMessage += `
------------------------------------------\n
SUBTOTAL: ${convertPriceToBRFormat(cartProducts.reduce((total: number, product: ProductProps) => total + Number(product.totalProductPrice), 0))}
TAXA DE ENTREGA: ${deliveryCost === 0 ? 'Grátis' : convertPriceToBRFormat(deliveryCost)}
TOTAL: ${convertPriceToBRFormat(cartProducts.reduce((total: number, product: ProductProps) => total + Number(product.totalProductPrice), 0) + deliveryCost)}
`

    const userInfos: DeliveryDetailsForm = getLocalStorageItem(
      SPIDER_LINK_USER_INFOS,
    )

    const name = userInfos.nome
    const address = userInfos.endereco.rua
    const neighborhood = userInfos.endereco.bairro
    const complement = userInfos.endereco.complemento
    const phone = userInfos.telefone

    if (deliverySelected === 'Entrega') {
      orderMessage += `
------------------------------------------\n
`
    }

    if (deliverySelected === 'Entrega') {
      deliverySelected === 'Entrega' &&
        (orderMessage += '🚚 *Entrega - Forma de pagamento:*\n\n')

      if (paymentOption === 'Dinheiro') {
        orderMessage += '💵 *Dinheiro*\n'

        needChange === 'Sim' && (orderMessage += `Troco para: ${change}`)
        needChange === 'Não' && (orderMessage += '- Não precisa de troco\n')
      }

      paymentOption === 'Cartão' && (orderMessage += '💳 *Cartão*\n')
    }

    orderMessage += `
------------------------------------------\n
${deliverySelected === 'Retirada' ? '🏠 *Retirada no local*' : ''}
${deliverySelected === 'Retirada' ? '*Dados para retirada:*' : '*Dados para entrega:*'}

Nome: ${name} \n
Telefone: ${phone}
${
  deliverySelected !== 'Retirada'
    ? `
Endereço: ${address} \n
Bairro: ${neighborhood} \n
Complemento: ${complement}\n`
    : ''
}
------------------------------------------

${deliverySelected === 'Entrega' ? `🚚 Previsão de entrega:* ${deliveryTime}` : ''}${deliverySelected === 'Retirada' ? `🏠 *Tempo para retirada no local:* ${deliveryTime}\n` : ''}
`
    window.open(
      `https://wa.me/+558296041284?text=${encodeURIComponent(orderMessage)}`,
    )
  }

  return (
    <Dialog.Root open={isCheckoutDialogOpen}>
      <Dialog.Portal>
        <Overlay onClick={closeCheckoutDialog} />

        <Content>
          {/**
           * Etapas do checkout
           * 0 - Seleção de entrega
           * 1 - Seleção de pagamento
           * 2 - Dinheiro selecionado
           * 3 - Troco
           * 4 - Verificação de dados
           * 5 - Finalização
           */}

          <TransitionGroup className="transition-group">
            <CSSTransition key={step} timeout={500} classNames="slide">
              <>
                {step === 0 && <DeliverySelection onNext={nextStep} />}
                {step === 1 && <PaymentSelection onNext={nextStep} />}
                {step === 2 && <MoneySelected onNext={nextStep} />}
                {step === 3 && <Change onNext={nextStep} />}
                {step === 4 && <VerifyUserData onNext={nextStep} />}
                {step === 5 && <FinishCheckout />}
              </>
            </CSSTransition>
          </TransitionGroup>

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
