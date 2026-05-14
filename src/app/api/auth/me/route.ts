import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { findUserById } from "@/lib/user-store";
import { getSessionCookie, verifySessionToken } from "@/lib/auth";

export async function GET() {
  const cookie = getSessionCookie();
  const token = (await cookies()).get(cookie.name)?.value;

  if (!token) {
    return NextResponse.json({ user: null });
  }

  try {
    const session = await verifySessionToken(token);
    if (!session) return NextResponse.json({ user: null });

    const user = await findUserById(session.userId);
    if (!user) return NextResponse.json({ user: null });

    return NextResponse.json({ user: { id: user.id, email: user.email } });
  } catch {
    return NextResponse.json({ user: null });
  }
}
