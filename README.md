# OrchardPatch — Waitlist Landing Page

A static waitlist landing page for OrchardPatch, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Next.js 14** (App Router, static export ready)
- **TypeScript**
- **Tailwind CSS v4**
- Client-side email capture (no backend required)

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel (one-click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-org/orchardpatch-waitlist)

Or manually:

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repository — Vercel auto-detects Next.js.
4. Click **Deploy**. Done.

No environment variables are required for the basic waitlist page. See `.env.example` for future backend integration.

---

## Wiring Up a Real Backend

The email form (`app/components/EmailForm.tsx`) currently shows a client-side success message on submit. To persist signups:

1. Create an API route at `app/api/waitlist/route.ts`.
2. In `EmailForm.tsx`, replace the `handleSubmit` body with a `fetch('POST', '/api/waitlist', { email })`.
3. Set `WAITLIST_STORAGE_PATH` (for file-based storage) or a database URL in `.env.local`.

---

## Project Structure

```
app/
  components/
    EmailForm.tsx     # Client component — email capture form
  globals.css         # Brand design tokens + Tailwind base
  layout.tsx          # Root layout + metadata
  page.tsx            # Full landing page (server component)
public/               # Static assets
.env.example          # Environment variable template
```

---

## Brand Colors

| Token | Hex | Use |
|---|---|---|
| Orchard Green | `#2d5016` | Primary, CTAs, nav |
| Light Green | `#3a6b1e` | Hover states |
| Pale Green | `#eef4e8` | Feature card backgrounds |
| Cream | `#faf7f2` | Page background |
| Apple Red | `#c0392b` | Problem icons, accents |
