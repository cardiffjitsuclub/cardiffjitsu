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

- src/pages/index.astro — home page
- src/pages/events/index.astro — events page
- public/ — images and other files copied into the published site
- public/CNAME — custom domain
- astro.config.mjs — Astro configuration
- .github/workflows/check.yml — automatic build checks
- .github/workflows/deploy.yml — publishing workflow

Do not commit node_modules, dist or .astro.
Commit package-lock.json when dependencies change.

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
