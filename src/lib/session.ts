import { SignJWT, jwtVerify } from "jose";

const COOKIE_NAME = "zesira_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days

type SessionPayload = {
  sub: string;
  email: string;
};

function getJwtSecret() {
  const secret = process.env.AUTH_SECRET ?? "dev-only-secret-change-me";
  return new TextEncoder().encode(secret);
}

export async function signSessionToken(payload: SessionPayload) {
  return new SignJWT({ email: payload.email })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_TTL_SECONDS}s`)
    .sign(getJwtSecret());
}

export async function verifySessionToken(token: string) {
  const { payload } = await jwtVerify(token, getJwtSecret());
  if (!payload.sub || typeof payload.email !== "string") return null;
  return { userId: payload.sub, email: payload.email };
}

export function getSessionCookie() {
  return {
    name: COOKIE_NAME,
    maxAge: SESSION_TTL_SECONDS,
    options: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax" as const,
      path: "/",
      maxAge: SESSION_TTL_SECONDS,
    },
  };
}
