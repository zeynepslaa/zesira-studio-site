import { NextResponse } from "next/server";
import { createUser } from "@/lib/user-store";
import { getSessionCookie, hashPassword, signSessionToken } from "@/lib/auth";

type RegisterBody = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as RegisterBody;
  const email = body.email?.trim().toLowerCase() ?? "";
  const password = body.password?.trim() ?? "";

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Geçerli bir e-posta gir." }, { status: 400 });
  }

  if (password.length < 6) {
    return NextResponse.json({ error: "Şifre en az 6 karakter olmalı." }, { status: 400 });
  }

  const passwordHash = await hashPassword(password);
  const user = await createUser({ email, passwordHash });

  if (!user) {
    return NextResponse.json({ error: "Bu e-posta zaten kayıtlı." }, { status: 409 });
  }

  const token = await signSessionToken({ sub: user.id, email: user.email });
  const cookie = getSessionCookie();
  const response = NextResponse.json({ user: { id: user.id, email: user.email } });
  response.cookies.set(cookie.name, token, cookie.options);
  return response;
}
