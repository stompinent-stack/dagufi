# Dagufi — Headless Shopify Webshop

Premium one-product webshop voor hondenaccessoires, gebouwd op Next.js + Shopify Storefront API, klaar voor Vercel deployment.

---

## 🚀 Tech stack

| Laag | Technologie |
|------|------------|
| Frontend | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| State | Zustand (cart) |
| Animaties | Framer Motion |
| Backend | Shopify Storefront API |
| Checkout | Shopify native checkout |
| Hosting | Vercel |
| Analytics | Vercel Analytics |

---

## 📁 Projectstructuur

```
src/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Homepage
│   ├── layout.tsx              # Root layout (header, footer, cart)
│   ├── globals.css             # Globale stijlen
│   ├── products/
│   │   ├── page.tsx            # Productoverzicht
│   │   └── [handle]/
│   │       ├── page.tsx        # Productpagina (server)
│   │       └── ProductPageClient.tsx  # Productpagina (client)
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   ├── track-order/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms-conditions/page.tsx
│   ├── refund-policy/page.tsx
│   ├── shipping-policy/page.tsx
│   ├── sitemap.ts              # Automatische sitemap
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigatie + mobiel menu
│   │   ├── Footer.tsx          # Footer met links
│   │   └── CartDrawer.tsx      # Slide-in winkelwagen
│   ├── home/                   # Homepage secties
│   │   ├── Hero.tsx
│   │   ├── ProblemSolution.tsx
│   │   ├── FeaturedProduct.tsx
│   │   ├── Benefits.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FaqPreview.tsx
│   │   └── CtaBanner.tsx
│   └── ui/                     # Herbruikbare componenten
│       ├── ProductCard.tsx
│       ├── AddToCartButton.tsx
│       ├── TrustBadges.tsx
│       └── PolicyPage.tsx
├── lib/
│   ├── shopify.ts              # Shopify client + alle GraphQL queries
│   ├── api.ts                  # High-level API functies
│   ├── normalise.ts            # Shopify response → app types
│   ├── store.ts                # Zustand cart store
│   └── utils.ts                # cn() utility
└── types/
    └── shopify.ts              # TypeScript types
```

---

## ⚙️ Setup — stap voor stap

### 1. Clone en installeer

```bash
git clone <jouw-repo>
cd dagufi
npm install
```

### 2. Maak `.env.local` aan

```bash
cp .env.example .env.local
```

Vul de waarden in (zie sectie hieronder).

### 3. Start de dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔑 Shopify API keys instellen

### Stap 1 — Maak een Custom App in Shopify

1. Ga naar **Shopify Admin** → **Settings** → **Apps and sales channels**
2. Klik op **Develop apps** (rechtsboven)
3. Klik op **Create an app**
4. Geef de app een naam: `Dagufi Frontend`
5. Klik op **Configure Storefront API scopes**
6. Vink **minimaal** deze scopes aan:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_checkouts`
   - `unauthenticated_write_checkouts`
   - `unauthenticated_read_customers` (optioneel)
7. Klik op **Save**
8. Ga naar **API credentials** tab
9. Klik op **Install app**
10. Kopieer de **Storefront API access token**

### Stap 2 — Vul `.env.local` in

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=jouw-winkel.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=jouw_token_hier
NEXT_PUBLIC_SITE_URL=https://dagufi.com
```

> ⚠️ `NEXT_PUBLIC_` prefix betekent dat deze variabelen zichtbaar zijn in de browser. De Storefront API token is bedoeld voor publiek gebruik en heeft beperkte rechten.

---

## 🛍️ Producten zichtbaar maken op de site

### In Shopify Admin:

1. **Voeg producten toe** via Products → Add product
2. Zorg dat elk product:
   - Een **handle** heeft (URL-vriendelijke naam, automatisch gegenereerd)
   - **Gepubliceerd** is (Sales channels → Online Store = ✓)
   - Een **prijs** heeft
   - Minimaal één **afbeelding** heeft
3. Voor de homepage-featured sectie: zet de producten op **Best Selling** sortering of geef ze een hoge verkoopcijfer

### Producten verschijnen automatisch op:
- `/products` — alle producten
- `/products/[handle]` — individuele productpagina
- Homepage — eerste beste-verkoper product

### Varianten toevoegen:
In Shopify kun je opties toevoegen (maat, kleur). De productpagina toont deze automatisch als knoppen.

---

## 🚀 Vercel deployment

### Stap 1 — Push naar GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Stap 2 — Import in Vercel

1. Ga naar [vercel.com](https://vercel.com) en log in
2. Klik **Add New** → **Project**
3. Importeer jouw GitHub repository
4. Framework: **Next.js** (automatisch herkend)

### Stap 3 — Environment variables in Vercel

In het Vercel dashboard → jouw project → **Settings** → **Environment Variables**:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` | `jouw-winkel.myshopify.com` |
| `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` | jouw token |
| `NEXT_PUBLIC_SITE_URL` | `https://jouwdomein.com` |

### Stap 4 — Deploy

Klik **Deploy**. Vercel bouwt en deployt automatisch.

---

## 🌐 Eigen domein koppelen

1. Vercel dashboard → jouw project → **Settings** → **Domains**
2. Voeg `dagufi.com` en `www.dagufi.com` toe
3. Vercel geeft DNS-instructies (CNAME of A-records)
4. Stel de DNS in bij jouw domeinprovider
5. Update `NEXT_PUBLIC_SITE_URL` naar jouw domein

---

## 📦 CJdropshipping integratie (later)

Wanneer je CJdropshipping gaat koppelen:

1. Installeer de **CJdropshipping app** in Shopify via de Shopify App Store
2. Koppel producten in CJdropshipping aan jouw Shopify producten
3. Orders worden automatisch doorgestuurd naar CJdropshipping
4. **De frontend verandert niet** — alles loopt via Shopify

---

## ➕ Producten toevoegen (schaalbaarheid)

De site is gebouwd om eenvoudig uit te breiden:

- **Nieuw product** → voeg toe in Shopify → verschijnt automatisch op `/products`
- **Collecties** → maak collecties aan in Shopify en voeg een query toe in `src/lib/shopify.ts`
- **Filters** → voeg filterfunctionaliteit toe in `src/app/products/page.tsx`
- **Producttypen** → de productpagina is generiek en werkt voor elk product

---

## 🎨 Branding aanpassen

Kleuren: `tailwind.config.ts` → `theme.extend.colors`  
Lettertypen: `src/app/layout.tsx` → Google Fonts imports  
Logo: vervang de tekst `DAGUFI` in `Header.tsx` en `Footer.tsx` door een `<Image>` component  
Afbeeldingen: vervang de emoji-placeholders door echte afbeeldingen uit Shopify  

---

## 📝 Content aanpassen

| Wat | Waar |
|-----|------|
| Homepage teksten | `src/components/home/*.tsx` |
| Reviews/testimonials | `src/components/home/Testimonials.tsx` |
| FAQ antwoorden | `src/app/faq/page.tsx` |
| Beleidspagina's | `src/app/*/page.tsx` |
| Verzendkosten/info | `src/app/shipping-policy/page.tsx` |
| Footer links | `src/components/layout/Footer.tsx` |

---

## 🔧 Scripts

```bash
npm run dev      # Lokale development server
npm run build    # Productie build
npm run start    # Start productie server
npm run lint     # ESLint check
```

---

## 📋 Checklist voor live gaan

- [ ] Shopify store aangemaakt en producten toegevoegd
- [ ] `.env.local` ingevuld met juiste keys
- [ ] Shopify Payments geconfigureerd
- [ ] Domeinnaam gekoppeld aan Vercel
- [ ] Environment variables ingesteld in Vercel
- [ ] Beleidspagina's gecontroleerd en aangepast
- [ ] Contact e-mailadres bijgewerkt
- [ ] Google Analytics of Vercel Analytics ingeschakeld
- [ ] Sitemap getest op `/sitemap.xml`
- [ ] Mobiele weergave getest

---

## 💬 Support

Vragen ? support@dagufi.com
