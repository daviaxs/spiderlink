import { themeColors } from './pallete'

export const lightTheme = {
  current: 'claro',

  body: themeColors.white,
  bodySecondary: themeColors['dark-blue-50'],

  border: themeColors['dark-blue-100'],

  title: themeColors['dark-blue-800'],
  text: themeColors['dark-blue-800'],
  subtext: themeColors['dark-blue-400'],

  icon: themeColors['dark-blue-800'],
  iconContainer: themeColors['dark-blue-100'],
}

export const darkTheme = {
  current: 'escuro',

  body: themeColors['dark-blue-900'],
  bodySecondary: themeColors['dark-blue-800'],

  border: themeColors['dark-blue-500'],

  title: themeColors.white,
  text: themeColors['dark-blue-50'],
  subtext: themeColors['dark-blue-200'],

  icon: themeColors['dark-blue-50'],
  iconContainer: themeColors['dark-blue-500'],
}
