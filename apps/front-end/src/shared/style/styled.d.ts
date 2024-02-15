import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    current: string

    body: string
    bodySecondary: string
    bodyTertiary: string

    border: string
    borderSecondary: string

    title: string
    text: string
    description: string
    subtext: string

    icon: string
    iconSecondary: string
    iconTertiary: string
    iconContainer: string

    statusOpen: string
    statusClosed: string

    button: string
    hoverButton: string
  }
}
