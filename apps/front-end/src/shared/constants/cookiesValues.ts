import { parseCookies } from 'nookies'
import { SPIDER_LINK_ACCESS_TOKEN } from './cookiesNames'

const cookies = parseCookies()

export const userAccesToken = cookies[SPIDER_LINK_ACCESS_TOKEN]
