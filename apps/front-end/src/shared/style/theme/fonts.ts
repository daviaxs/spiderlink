import { Inter, Roboto } from 'next/font/google'

export const inter = Inter({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  preload: true,
})

export const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  preload: true,
})
