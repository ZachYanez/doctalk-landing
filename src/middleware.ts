import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Ensure verify route is handled properly
  if (request.nextUrl.pathname === "/verify") {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/verify"],
};
