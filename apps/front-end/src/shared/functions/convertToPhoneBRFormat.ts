export function convertToPhoneBRFormat(phone: string) {
  return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}
