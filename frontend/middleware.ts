import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const jwt = request.cookies.get('token') || null;

  const isExist = jwt ? (jwt.value ? true : false) : false;

  if (!isExist) {
    if (request.nextUrl.pathname.includes('auth')) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  if (isExist) {
    if (request.nextUrl.pathname.includes('login')) {
      return NextResponse.redirect(new URL('/app/home', request.url));
    }
  }

  if (isExist) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/auth/login', request.url));
}

export const config = {
  matcher: ['/app/:path*', '/auth/:path*'],
};
