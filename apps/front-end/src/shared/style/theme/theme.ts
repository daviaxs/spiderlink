import { themeColors } from './pallete'

export const lightTheme = {
  current: 'claro',

  body: themeColors.white,
  bodySecondary: themeColors['dark-blue-50'],

  border: themeColors['dark-blue-100'],

  title: themeColors['dark-blue-800'],
  text: themeColors['dark-blue-800'],
  description: themeColors['dark-blue-500'],
  subtext: themeColors['dark-blue-400'],

  icon: themeColors['dark-blue-800'],
  iconSecondary: themeColors['dark-blue-300'],
  iconContainer: themeColors['dark-blue-100'],

  button: themeColors['primary-500'],
  hoverButton: '#00000010',
}

export const darkTheme = {
  current: 'escuro',

  body: themeColors['dark-blue-900'],
  bodySecondary: themeColors['dark-blue-800'],

  border: themeColors['dark-blue-500'],

  title: themeColors.white,
  text: themeColors['dark-blue-50'],
  description: themeColors['dark-blue-100'],
  subtext: themeColors['dark-blue-200'],

  icon: themeColors['dark-blue-50'],
  iconSecondary: themeColors['dark-blue-200'],
  iconContainer: themeColors['dark-blue-500'],

  button: themeColors['primary-200'],
  hoverButton: '#ffffff10',
}
