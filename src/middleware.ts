import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/settings(.*)","/"])

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    console.log('Protected route, applying auth protection.');
    auth().protect();
  }
});

export const config = {
  matcher: [
    "/",
    "/settings(.*)",
    "/(api|trpc)(.*)",
    "/((?!.*\\..*|_next).*)"
  ],
};