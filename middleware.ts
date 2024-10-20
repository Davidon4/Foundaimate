import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isOnboardingRoute = createRouteMatcher(['/welcome'])
const isPublicRoute = createRouteMatcher(['/'])

export default clerkMiddleware((auth, req: NextRequest) => {
    const {userId, sessionClaims, redirectToSignIn} = auth()

    if (userId && isOnboardingRoute(req)) {
      return NextResponse.next()
    }

    if (!userId && !isPublicRoute(req)) return redirectToSignIn({returnBackUrl: req.url})

      if (userId && !sessionClaims?.metadata?.onboardingComplete && req.nextUrl.pathname !== "/welcome") {
        const onboardingUrl = new URL('/welcome', req.url)
        return NextResponse.redirect(onboardingUrl)
      }

      if (userId && !isPublicRoute(req)) return NextResponse.next()
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};