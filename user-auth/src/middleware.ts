import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url))

    const path = request.nextUrl.pathname
    const token = request.cookies.get('token')?.value || ''

    const publicUrl = path == "/login" || path == "/signup"

    if(publicUrl && token){
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if(!publicUrl && !token){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup'
  ]
}