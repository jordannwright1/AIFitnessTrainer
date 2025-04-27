import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRouteOne(req) || isProtectedRouteTwo(req)) await auth.protect();
});

const isProtectedRouteOne = createRouteMatcher('/generate-program')
const isProtectedRouteTwo = createRouteMatcher('/profile')


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
