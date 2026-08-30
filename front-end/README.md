# Portfolio — Witalo Dias

Minimal full-stack developer portfolio. Angular 19, black base with a single
purple accent, EN/PT runtime toggle (English by default). No tracking, no
external UI libraries.

## Commands

```bash
npm install      # install dependencies
npm start        # dev server → http://localhost:4200
npm run build    # production build → dist/portfolio-angular
npm test         # unit tests (Karma)
```

## Where to edit content

**All visible text lives in one file:** [`src/app/core/translations.ts`](src/app/core/translations.ts).
It exports `dictionaries.en` and `dictionaries.pt`, which have the exact same
shape. Edit both so the two languages stay in sync. No component templates need
to change.

| What you want to change | Where |
| --- | --- |
| Name, homepage tagline | `home.name`, `home.tagline` |
| Job titles cycled in the hero typing animation | `home.roles` (first entry is also the accessible label) |
| Bio paragraphs | `about.body` |
| Journey timeline (`{ period, title, note? }`) | `about.experience` |
| "In short" facts (`{ label, value }`) | `about.facts` |
| Projects (name, year, techs, description, links) | `projects.items` |
| Skill groups and their items | `skills.groups` |
| Email, social links, availability line, CV label | `contact` |
| Footer line | `footer.rights` |
| Navigation labels | `nav` |

The **CV** download points to `public/cv/witalo-dias-cv.pdf` (path in the
`CV_FILE` constant in `translations.ts`). Drop your PDF there with that name.

### Adding a project

Add an object to `projects.items` in **both** `en` and `pt`:

```ts
{
  name: 'My Project',
  year: '2025',
  techs: ['react', 'php', 'laravel'],      // keys from src/app/core/tech-icons.ts
  description: 'One or two factual sentences about what it does.',
  url: 'https://example.com',              // optional — omit or '' to hide "Live"
  repo: 'https://github.com/you/project',  // optional — omit or '' to hide the repo link
}
```

Tech keys map to a label + monochrome icon in
[`src/app/core/tech-icons.ts`](src/app/core/tech-icons.ts). Known keys:
`react, angular, typescript, javascript, html, css, php, laravel, java, spring,
mysql, mongodb, docker, figma, git`. An unknown key just renders as plain text —
add a new entry (and drop an SVG in `public/imgs/tech-icons/`) to give it an icon.

### Changing contacts

Edit `contact.email`, the `contact.links` array (LinkedIn, GitHub, …), and the
`contact.form.*` copy. The email is a `mailto:` link; the form sends through
**EmailJS** (no backend) — set your own `serviceId` / `templateId` / `publicKey`
in the `EMAILJS` constant at the top of
[`contact.component.ts`](src/app/pages/contact/contact.component.ts). The EmailJS
template needs `{{name}}`, `{{email}}`, `{{message}}` and `{{time}}` variables.

## Where to edit design

Design tokens are at the top of [`src/styles.scss`](src/styles.scss) under `:root`:

| Token | Meaning |
| --- | --- |
| `--bg`, `--bg-elevated` | background surfaces |
| `--fg`, `--fg-muted`, `--fg-faint` | text shades |
| `--accent`, `--accent-hover` | the purple accent (the only colour) |
| `--border` | hairline rules |
| `--shadow` | dropdown shadow |
| `--space-1 … --space-7` | spacing scale |
| `--content-width` | max text column width |

Change `--accent` in one place to re-skin every highlight. The **light theme**
only overrides colour tokens — see `:root[data-theme='light']` in the same file.

The typeface is **Inter**, loaded in [`src/index.html`](src/index.html). Swap the
Google Fonts `<link>` and the `font-family` in `styles.scss` to change it.

## Header toggles

**Language (EN / PT)** — [`lang-toggle.component.ts`](src/app/components/lang-toggle/lang-toggle.component.ts)
+ [`i18n.service.ts`](src/app/core/i18n.service.ts). English is the default; the
choice is saved to `localStorage` and applied to `<html lang>`. Change the
fallback in `I18nService.readInitialLang()` to default to Portuguese.

**Theme (light / dark)** — [`theme-toggle.component.ts`](src/app/components/theme-toggle/theme-toggle.component.ts)
+ [`theme.service.ts`](src/app/core/theme.service.ts). Dark is the default, unless
`localStorage` or the OS says otherwise. Applied as `data-theme` on `<html>`; a
tiny inline script in `index.html` sets it before first paint to avoid a flash.

## Single-page layout

Everything lives on one scrolling page. [`landing.component.ts`](src/app/pages/landing/landing.component.ts)
stacks the five section components (`app-home`, `app-about`, `app-project`,
`app-skills`, `app-contact`), each rendering a `<section id="…">`. The header nav
uses plain `#anchor` links + CSS `scroll-behavior: smooth`; the router has **no**
scroll features so it doesn't fight in-page navigation.

- **Active nav highlight** — [`section-spy.service.ts`](src/app/core/section-spy.service.ts):
  an `IntersectionObserver` tracks which section is near the viewport centre and
  the header underlines the matching link.
- **Scroll reveal** — [`reveal.directive.ts`](src/app/core/reveal.directive.ts):
  put `appReveal` on an element to fade/slide it in when it enters view; pass a
  number (`[appReveal]="80"`) for a stagger delay in ms. Respects
  `prefers-reduced-motion`.

**Add a section:** create the component with a `<section id="foo">`, add it to
`LandingComponent`, and add `<a href="#foo" [class.is-active]="active === 'foo'">`
to [`header.component.html`](src/app/components/header/header.component.html).

## Deploy

Static SPA. `vercel.json` rewrites all paths to `index.html`. Update the
`canonical` / `og:url` URLs in `index.html` to your real domain.
