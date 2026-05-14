import { NextResponse } from "next/server";
import { findUserByEmail } from "@/lib/user-store";
import { getSessionCookie, signSessionToken, verifyPassword } from "@/lib/auth";

type LoginBody = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as LoginBody;
  const email = body.email?.trim().toLowerCase() ?? "";
  const password = body.password?.trim() ?? "";

  const user = await findUserByEmail(email);
  if (!user) {
    return NextResponse.json({ error: "E-posta veya şifre hatalı." }, { status: 401 });
  }

  const passwordOk = await verifyPassword(password, user.passwordHash);
  if (!passwordOk) {
    return NextResponse.json({ error: "E-posta veya şifre hatalı." }, { status: 401 });
  }

  const token = await signSessionToken({ sub: user.id, email: user.email });
  const cookie = getSessionCookie();

  const response = NextResponse.json({ user: { id: user.id, email: user.email } });
  response.cookies.set(cookie.name, token, cookie.options);
  return response;
}
