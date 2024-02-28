import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    current: string

    white: string

    body: string
    bodySecondary: string
    bodyTertiary: string
    bodyQuaternary: string
    bodyQuinary: string

    productBackground: string

    border: string
    borderSecondary: string
    borderTertiary: string
    borderQuaternary: string

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
    buttonSecondary: string
    buttonTertiary: string
    buttonQuaternary: string

    hoverButtonSecondary: string
    hoverButton: string

    shadow: string
  }
}
