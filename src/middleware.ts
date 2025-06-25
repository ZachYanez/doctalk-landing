import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if this is a reset password link
  if (pathname.startsWith("/reset-password/")) {
    const token = pathname.split("/reset-password/")[1];
    if (token) {
      // Create a new response redirecting to the reset password page
      const url = new URL("/reset-password", request.url);
      const response = NextResponse.redirect(url);

      // Set the token in a cookie instead of sessionStorage
      // This is more secure and works better with static hosting
      response.cookies.set("resetToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 3600, // 1 hour
      });

      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match reset-password URLs with tokens
    "/reset-password/:token*",
  ],
};
