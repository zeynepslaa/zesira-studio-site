import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getSessionCookie, verifySessionToken } from "@/lib/session";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/members")) {
    return NextResponse.next();
  }

  const cookie = getSessionCookie();
  const token = request.cookies.get(cookie.name)?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/#membership", request.url));
  }

  try {
    const session = await verifySessionToken(token);
    if (!session) {
      return NextResponse.redirect(new URL("/#membership", request.url));
    }
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/#membership", request.url));
  }
}

export const config = {
  matcher: ["/members", "/members/:path*"],
};
