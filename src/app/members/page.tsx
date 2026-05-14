import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { findUserById } from "@/lib/user-store";
import { getSessionCookie, verifySessionToken } from "@/lib/session";

export default async function MembersPage() {
  const cookie = getSessionCookie();
  const token = (await cookies()).get(cookie.name)?.value;
  if (!token) redirect("/#membership");

  let session: Awaited<ReturnType<typeof verifySessionToken>> = null;
  try {
    session = await verifySessionToken(token);
  } catch {}
  if (!session) redirect("/#membership");

  const user = await findUserById(session.userId);
  if (!user) redirect("/#membership");

  return (
    <main className="min-h-svh bg-[rgba(255,252,248,0.94)] px-6 py-24 text-[#2a2622] md:px-10">
      <div className="mx-auto max-w-4xl rounded-3xl border border-[rgba(90,82,74,0.16)] bg-white/70 p-8 md:p-12">
        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#7a6f66]">Members</p>
        <h1 className="mt-5 font-display text-[clamp(2.2rem,6vw,4rem)] leading-[0.92] tracking-[-0.03em]">
          Welcome back
        </h1>
        <p className="mt-4 font-serif text-lg text-[#5c534c]">
          Signed in as <span className="text-[#7a1528]">{user.email}</span>.
        </p>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-[rgba(90,82,74,0.14)] p-5">
            <h2 className="font-display text-2xl">Exclusive drops</h2>
            <p className="mt-3 text-sm text-[#5c534c]">New builds and CC capsules will appear here first.</p>
          </article>
          <article className="rounded-2xl border border-[rgba(90,82,74,0.14)] p-5">
            <h2 className="font-display text-2xl">Members notes</h2>
            <p className="mt-3 text-sm text-[#5c534c]">Private studio updates and release calendar preview.</p>
          </article>
        </section>

        <Link
          href="/#membership"
          className="mt-10 inline-flex border-b border-[rgba(90,82,74,0.28)] py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2a2622] transition hover:border-[#7a1528]/40 hover:text-[#7a1528]"
        >
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
