"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { MembershipTier } from "@/content/types";

export function MembershipSection({ intro, tiers }: { intro: string; tiers: MembershipTier[] }) {
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<"login" | "register">("register");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [memberEmail, setMemberEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/auth/me", { cache: "no-store" });
      const data = (await res.json()) as { user: { email: string } | null };
      setMemberEmail(data.user?.email ?? null);
    };
    void fetchUser();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const endpoint = mode === "register" ? "/api/auth/register" : "/api/auth/login";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = (await response.json()) as { error?: string; user?: { email: string } };

      if (!response.ok) {
        setMessage(data.error ?? "Bir hata oldu, tekrar dene.");
        return;
      }

      setMemberEmail(data.user?.email ?? email);
      setPassword("");
      setMessage(mode === "register" ? "Üyelik oluşturuldu." : "Giriş yapıldı.");
      window.location.href = "/members";
    } catch {
      setMessage("Sunucuya bağlanırken hata oldu.");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    setLoading(true);
    setMessage("");
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setMemberEmail(null);
      setMessage("Çıkış yapıldı.");
    } catch {
      setMessage("Çıkış yapılamadı, tekrar dene.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="membership" className="paper-section-2 editorial-section-floor relative scroll-mt-28 py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="max-w-3xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: reduce ? 0 : 0.75 }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#7a6f66]">Membership</p>
          <h2 className="mt-5 font-display text-[clamp(2.75rem,9.5vw,6rem)] font-medium leading-[0.9] tracking-[-0.03em] text-[#1f1b18]">
            Patron
            <span className="mt-1 block pl-[min(9vw,5rem)] font-normal text-[#7a1528]/90">constellations</span>
          </h2>
          <p className="mt-10 font-serif text-[1.05rem] font-light leading-[1.65] text-[#5c534c] md:text-[1.1rem]">{intro}</p>
        </motion.div>

        <div className="mt-9 md:mt-12">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              className={`relative grid gap-10 border-t border-[rgba(90,82,74,0.12)] py-10 md:grid-cols-12 md:items-end md:gap-8 md:py-14 ${
                tier.highlighted ? "bg-[radial-gradient(ellipse_80%_120%_at_0%_50%,rgba(122,21,40,0.06),transparent_55%)] px-4 md:-mx-4 md:px-8" : ""
              }`}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : i * 0.05 }}
            >
              {tier.highlighted ? (
                <span className="absolute right-0 top-6 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#7a1528] md:right-6">
                  Favored
                </span>
              ) : null}
              <div className="md:col-span-4">
                <h3 className="font-display text-[clamp(1.85rem,4vw,3rem)] font-medium leading-tight tracking-[-0.02em] text-[#1f1b18]">
                  {tier.name}
                </h3>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#8a8076]">{tier.price}</p>
              </div>
              <ul className="space-y-4 text-[0.98rem] leading-snug text-[#5c534c] md:col-span-5">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex gap-3">
                    <span
                      className="mt-[0.6em] h-px w-8 shrink-0 bg-[rgba(122,21,40,0.28)]"
                      aria-hidden
                    />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <div className="md:col-span-3 md:flex md:justify-end md:pb-1">
                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center px-2 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] transition md:min-w-[11rem] ${
                    tier.highlighted
                      ? "border-b-2 border-[#7a1528] text-[#7a1528] hover:border-[#5c0f1f] hover:text-[#5c0f1f]"
                      : "border-b border-[rgba(90,82,74,0.22)] text-[#2a2622] hover:border-[#7a1528]/40 hover:text-[#7a1528]"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 border-t border-[rgba(90,82,74,0.12)] pt-8"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: reduce ? 0 : 0.7 }}
        >
          <h3 className="font-display text-[clamp(1.55rem,3.4vw,2.4rem)] tracking-[-0.02em] text-[#1f1b18]">
            Member portal
          </h3>
          {memberEmail ? (
            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="font-serif text-[1rem] text-[#5c534c]">
                Hoş geldin, <span className="text-[#7a1528]">{memberEmail}</span>. Üye alanın aktif.
              </p>
              <div className="flex gap-4">
                <a
                  href="/members"
                  className="inline-flex items-center justify-center border-b border-[#7a1528] px-1 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#7a1528] transition hover:border-[#5c0f1f] hover:text-[#5c0f1f]"
                >
                  Üye alanı
                </a>
                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={loading}
                  className="inline-flex items-center justify-center border-b border-[rgba(90,82,74,0.28)] px-1 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2a2622] transition hover:border-[#7a1528]/40 hover:text-[#7a1528] disabled:opacity-60"
                >
                  Çıkış yap
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:max-w-xl">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className={`px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] ${
                    mode === "register" ? "border-b-2 border-[#7a1528] text-[#7a1528]" : "text-[#7a6f66]"
                  }`}
                >
                  Üye ol
                </button>
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className={`px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] ${
                    mode === "login" ? "border-b-2 border-[#7a1528] text-[#7a1528]" : "text-[#7a6f66]"
                  }`}
                >
                  Giriş yap
                </button>
              </div>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="border border-[rgba(90,82,74,0.22)] bg-transparent px-4 py-3 text-sm text-[#2a2622] outline-none placeholder:text-[#8a8076] focus:border-[#7a1528]/45"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifre"
                minLength={6}
                required
                className="border border-[rgba(90,82,74,0.22)] bg-transparent px-4 py-3 text-sm text-[#2a2622] outline-none placeholder:text-[#8a8076] focus:border-[#7a1528]/45"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center border-b-2 border-[#7a1528] px-2 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7a1528] transition hover:border-[#5c0f1f] hover:text-[#5c0f1f] disabled:opacity-60"
              >
                {loading ? "Yükleniyor…" : mode === "register" ? "Hesap aç" : "Giriş yap"}
              </button>
            </form>
          )}

          {message ? <p className="mt-4 text-sm text-[#7a1528]">{message}</p> : null}
        </motion.div>
      </div>
    </section>
  );
}
