# Universal Renewable

Simple multi-page website (Next.js + Tailwind). Pages: Home, About, Services, Projects, Contact.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Things to fill in

- **Logo:** put your file in `public/` (e.g. `public/logo.png`) and swap the dashed "LOGO" box in `components/Navbar.tsx` and `components/Footer.tsx` for an `<Image>`.
- **Projects:** edit the list at the top of `app/projects/page.tsx`. Add photos to `public/` and set `image: "/your-photo.jpg"`.
- **Contact details:** replace the `[bracketed]` text in `components/Footer.tsx` and `app/contact/page.tsx`.
- **About / Services:** edit the text in `app/about/page.tsx` and `app/services/page.tsx`.
- **Colors:** `app/globals.css` (`brand-*` greens, plus one small `accent` color).
