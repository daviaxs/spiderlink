interface SetItemProps {
  key: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
}

export function setLocalStorageItem({ key, value }: SetItemProps) {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorageItem = (key: string) => {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : null
}
