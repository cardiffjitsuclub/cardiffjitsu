# Jitsu Wales website

Website: https://jitsu.wales
Built with Astro and hosted on GitHub Pages.

## Requirements

- Node.js 24 LTS (currently tested with 24.21.0)
- npm (included with Node.js)
- Git

## Local setup

Clone the repository, open its folder, then run:

    npm ci

This installs the dependency versions recorded in package-lock.json.

## Development preview

    npm run dev

Open the local address printed in the terminal.
Saved changes appear automatically.
Press Control+C to stop the server.

Google Calendar and Maps embeds require internet access.

## Check the publishable website

    npm run build
    npm run preview

Check every page, images, navigation and embedded content.
Also check the layout at a narrow mobile width.

The production preview shows the last build.
Run the build again after making further changes.

## Project structure

- src/pages/index.astro — Wales home page and club directory
- src/pages/clubs/cardiff/index.astro — Cardiff City club page
- src/pages/events/index.astro — events page
- src/layouts/SiteLayout.astro — shared page structure, navigation and footer
- src/layouts/ClubLayout.astro — shared training and contact sections for new club pages
- src/styles/global.css — shared styling
- src/data/clubs.ts — club directory; add a href when a club page is ready
- public/ — images and other files copied into the published site
- public/CNAME — custom domain
- astro.config.mjs — Astro configuration
- .github/workflows/check.yml — automatic build checks
- .github/workflows/deploy.yml — publishing workflow

Do not commit node_modules, dist or .astro.
Commit package-lock.json when dependencies change.

## Adding club details

The other club pages live under `src/pages/clubs/` at
`cardiff-metropolitan-university/`, `cardiff-university/`,
`swansea-university/`, `st-athan/` and `vale/`.
They use `ClubLayout` with placeholders for any details not yet supplied.
Pass a `when` array of training-session strings, `where` address text, and a `contacts` array of `{ label, href }`
objects to the layout to fill in a club's details. Email links use `mailto:`;
social links use the full HTTPS address.

All six club pages are linked from the home page through `src/data/clubs.ts`.
For future clubs, omit the `href` until the page is ready to link.
Once published, unlinked pages can still be accessed directly by URL.

### Customising a club page

All club pages use `ClubLayout`. It provides When, Where and Contact Us,
and accepts optional `subtitle`, `description` and `heroImage` overrides.
Contact entries can set `newTab: true` to open a social link in a new tab.

Add content inside `<ClubLayout>...</ClubLayout>` using these slots, in order:

- `intro` — above When and Where
- `after-details` — after When and Where, for calendars or maps
- `before-contact` — before Contact Us, for fees, FAQs or photos
- Default (no slot attribute) — after Contact Us

For example:

```astro
<ClubLayout name="Example Jiu Jitsu Club" when={['Mondays 7.00-9.00pm']} where="Example Sports Centre">
  <p slot="intro" class="lead">Welcome to our club.</p>
  <section slot="before-contact" class="section card">
    <h2>Your first session</h2>
    <p>Club-specific information goes here.</p>
  </section>
</ClubLayout>
```

Slots add no surrounding markup or spacing. Use the shared `section`, `card`
and `grid` classes as needed. Cardiff City's page demonstrates all four slots.

## Search engine discovery

`astro.config.mjs` defines the public URL as `https://jitsu.wales`.
The sitemap integration automatically includes the site's pages on each build,
producing `dist/sitemap-index.xml` and `dist/sitemap-0.xml`.
`src/pages/robots.txt.ts` generates a crawler-friendly `robots.txt` linking to the
sitemap. `SiteLayout` gives every page its own absolute canonical URL (preferred
search-engine address), using the same public domain and trailing slash.

After building, check these files and the canonical links in `dist/**/*.html`.
After publishing, verify `/robots.txt`, `/sitemap-index.xml`, `/sitemap-0.xml`
and the canonical link in each live page's source.

## Making a change

1. Switch to main and pull the latest changes.
2. Create a branch for one focused change.
3. Edit and test locally.
4. Review and commit the changes.
5. Push the branch and open a pull request targeting main.
6. Wait for Build website to pass and resolve review comments.
7. Merge when ready to publish.
8. Confirm Publish website succeeds, then check the live site.

External contributors can fork the repository and submit a pull request.

Main is protected. Pull requests and passing checks are required.
A second person's approval is not currently required.

## Publishing

Merging into main automatically builds and publishes the website.
Working branches and pull requests do not publish to the live site.

GitHub Pages uses GitHub Actions as its publishing source.
The custom domain is jitsu.wales, with HTTPS enforced.

## Rolling back a published change

Open the merged pull request on GitHub and choose Revert.
Create the reverting pull request, let its checks pass, then merge it.
Confirm deployment succeeds and check the live website.

If GitHub cannot revert automatically, resolve the revert locally
on a new branch and submit it through a pull request.

Revert the specific problematic change. Do not routinely revert
the original Astro migration: it introduced the publishing workflow.

The astro-baseline tag marks the initial working Astro deployment.
Creating or viewing a tag does not deploy or restore the site.
