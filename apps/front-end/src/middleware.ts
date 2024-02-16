import { SPIDER_LINK_ACCESS_TOKEN } from '@/shared/constants/cookiesNames'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = req.cookies.get(SPIDER_LINK_ACCESS_TOKEN)?.value

  const HomePageURL = new URL('/', req.url)

  if (!token && req.nextUrl.pathname === '/admin') {
    return NextResponse.redirect(HomePageURL)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
