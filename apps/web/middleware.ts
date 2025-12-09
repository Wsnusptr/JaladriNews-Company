// apps/web/middleware.ts
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    return NextResponse.next();
  }
  
  const token = await getToken({ req: request, secret });
  const path = request.nextUrl.pathname;
  
  // If user is not logged in, redirect to login page
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // For kirim-tulisan, any logged-in user can access
  return NextResponse.next();
}

// Protect specific routes
export const config = {
  matcher: [
    '/profile/:path*',
    '/settings/:path*',
    '/kirim-tulisan/:path*',

  ],
};
