# Will & Maya's Wedding Website

we are getting married!!!!!

## Prerequisites

- [Node.js](https://nodejs.org/) (includes npm) &mdash; needed to run the Gulp
  build. Any recent LTS version works.
- A modern web browser to view the built site.

No local server, database, or other tooling is required.

## File structure

```
.
├── index.html, faq.html, rsvp.html, ...   generated pages (repo root) — do not edit directly
├── css/
│   └── styles.min.css   generated, compressed CSS — do not edit directly
├── js/
│   └── scripts.js       mobile hamburger menu (the only hand-written JS on the site)
├── assets/
│   ├── fonts/            self-hosted display font for the home page title
│   └── images/           tiled background wallpaper, logo, and other images
├── src/
│   ├── pages/             source HTML — one file per page; edit these
│   └── partials/          head, header, and footer markup shared by every page
├── sass/
│   ├── partials/          _variables, _typography, _layout, _header, _queries
│   └── styles.scss        Sass entry point; edit these to change styling
├── gulpfile.js            build tasks (see below)
├── package.json           npm scripts and build dependencies
└── .nojekyll              tells GitHub Pages to skip Jekyll and serve files as-is
```

**Edit the files in `src/` and `sass/`, never the generated `.html` files at
the repo root or `css/styles.min.css`** &mdash; those are overwritten on every
build. They are still committed to the repo, because GitHub Pages serves them
directly.

## Building the site

Install dependencies once, then run the Gulp build:

```bash
npm install   # install the build dependencies
npx gulp      # build the site
```

This runs two tasks (defined in `gulpfile.js`):

| Task   | From                | To                    | Tool                                                                   |
| ------ | ------------------- | --------------------- | ----------------------------------------------------------------------|
| `html` | `src/pages/*.html`  | `*.html` (repo root)  | [gulp-file-include](https://www.npmjs.com/package/gulp-file-include) stamps the shared partials into each page |
| `sass` | `sass/styles.scss`  | `css/styles.min.css`  | `gulp-sass`, compiled and compressed                                  |

While working, `npx gulp watch` rebuilds automatically whenever a file in
`src/` or `sass/` changes.

## Viewing the site

After building, open `index.html` in a browser by double-clicking it (or
`File > Open`). Everything uses relative paths, so no local server is needed.

## Adding or un-hiding a page

1. Add the page to `src/pages/`, copying the structure of an existing one.
2. Add its link to `src/partials/header.html`, passing the page's name as
   `active` from the page so the nav highlights correctly.
3. Run `npx gulp`.

## Deploying

Push to GitHub and enable Pages in the repository settings, pointing it at the
branch root. The committed `.html` and `css/` files are served as they are.
