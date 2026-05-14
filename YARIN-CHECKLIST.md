# Yarın — doğrudan başla

Bu liste bir önceki plandan; projeyi açınca sırayı takip et.

## 1. Görseller (öncelik)

- [ ] `public/household/` — Amanda, Summer, Leila için Sims render veya en iyi kareler (ör. `amanda.png`).
- [ ] `src/content/site.ts` — her karaktere `imageSrc: "/household/...."` ve `imageAlt: "..."` ekle.

## 2. Lookbook uygulaması

- [ ] Uygulamayı bitir, sunum / dağıtım kararını netleştir (indirme linki, demo URL, GitHub Release).
- [ ] `site.ts` → `featuredProjects` içinde Lookbook satırına `href: "..."` ekle (tıklanınca “Enter sequence” çalışsın).

## 3. Ses ve atmosfer

- [ ] `public/audio/ambient.mp3` koy veya `siteContent.audio.src` yolunu kendi dosyana çevir.

## 4. İletişim ve sosyal

- [ ] `contact.email` — gerçekten kullandığın adres mi kontrol et.
- [ ] `contact.socials` — Patreon / Pinterest / Tumblr / TikTok profil URL’lerinle değiştir (şu an genel ana sayfa linkleri).

## 5. Vault (dosyalar)

- [ ] Halka açık vault öğesine gerçek `href` (Drive, itch.io vb.) — yoksa “Preview only” kalır.
- [ ] Üyelikli öğelerde indirme veya açıklama sayfası hazırsa `href` güncelle; şimdilik çoğu `/members` ve “Linked soon”.

## 6. İsteğe bağlı

- [ ] Journal yazıları için harici blog varsa `posts` içine `href` ekle.
- [ ] CC bölümü şu an gradient; gerçek kapak görselleri istersen ileride `CcCollection` + bileşene görsel alanı eklenir.
- [ ] Canlıda auth için `.env.local` / Vercel’de `AUTH_SECRET` (README).

## 7. Oyun (aynı gün)

- [ ] CAS + build — household için yeni kareler toplamak için iyi zaman.

---

**Hızlı dosya yolları:** içerik `src/content/site.ts`, tipler `src/content/types.ts`, üyelik formu `src/components/home/sections/MembershipSection.tsx`.
