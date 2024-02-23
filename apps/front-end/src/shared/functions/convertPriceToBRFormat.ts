export function convertPriceToBRFormat(price: number) {
  const priceInReais = price / 100
  return priceInReais.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
