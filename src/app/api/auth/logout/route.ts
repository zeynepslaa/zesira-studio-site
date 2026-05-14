import { NextResponse } from "next/server";
import { getSessionCookie } from "@/lib/auth";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  const cookie = getSessionCookie();
  response.cookies.set(cookie.name, "", { ...cookie.options, maxAge: 0 });
  return response;
}
