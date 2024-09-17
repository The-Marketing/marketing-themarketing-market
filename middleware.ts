export { auth as middleware } from '@/app/api/auth/[...nextauth]/route';

// Don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};