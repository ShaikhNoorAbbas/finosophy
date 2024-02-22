import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      const protectedRoutes = ['/dashboard'];

      const isProtectedRoute = protectedRoutes.some((route) =>
        nextUrl.pathname.startsWith(route)
      );

      if (isProtectedRoute) {
        if (isLoggedIn) return true;
        return false;
      }

      if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
        // return true;
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
