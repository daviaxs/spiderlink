import { themeColors } from './pallete'

export const lightTheme = {
  current: 'claro',

  body: themeColors.white,
  bodySecondary: themeColors['dark-blue-50'],

  border: themeColors['dark-blue-100'],
  borderSecondary: themeColors['dark-blue-200'],
  borderTertiary: themeColors['dark-blue-300'],

  title: themeColors['dark-blue-800'],
  text: themeColors['dark-blue-800'],
  description: themeColors['dark-blue-500'],
  subtext: themeColors['dark-blue-400'],

  icon: themeColors['dark-blue-800'],
  iconSecondary: themeColors['dark-blue-300'],
  iconTertiary: themeColors['dark-blue-200'],
  iconContainer: themeColors['dark-blue-100'],

  statusOpen: themeColors['primary-500'],
  statusClosed: themeColors['red-400'],

  button: themeColors['primary-500'],
  hoverButton: '#00000010',
}

export const darkTheme = {
  current: 'escuro',

  body: themeColors['dark-blue-900'],
  bodySecondary: themeColors['dark-blue-800'],
  bodyTertiary: themeColors['dark-blue-700'],

  border: themeColors['dark-blue-500'],
  borderSecondary: themeColors['dark-blue-400'],

  title: themeColors.white,
  text: themeColors['dark-blue-50'],
  description: themeColors['dark-blue-100'],
  subtext: themeColors['dark-blue-200'],

  icon: themeColors['dark-blue-50'],
  iconSecondary: themeColors['dark-blue-200'],
  iconTertiary: themeColors['dark-blue-500'],
  iconContainer: themeColors['dark-blue-500'],

  statusOpen: themeColors['primary-200'],
  statusClosed: themeColors['red-500'],

  button: themeColors['primary-200'],
  hoverButton: '#ffffff10',
}
