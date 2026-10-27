# Hidden from the build

These files are kept out of `src/pages/` and `src/content/` so Astro does not
route or collect them. Restore later when blogs / about return:

1. Move `about.astro`, `blog/`, and `rss.xml.js` back under `src/pages/`.
2. Move `content/` back to `src/content/`.
3. Restore the blog collection in `src/content.config.ts`.
4. Move needed components from `components/` and `layouts/` back under `src/`.
5. Re-add `@astrojs/mdx` / `@astrojs/svelte` to `astro.config.mjs` if you use them.
