# AGENTS.md

This file provides guidance for AI agents working in this Astro blog repository.

## Project Overview

This is an **Astro** blog site using TypeScript, deployed to Cloudflare.

## Build Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to ./dist/ |
| `npm run preview` | Preview production build locally |
| `npm run astro -- --help` | Show Astro CLI help |
| `npm run generate-types` | Generate Wrangler types |

**No tests are configured** - this is a minimal Astro blog starter template.

## Technology Stack

- **Framework**: Astro 6.x (static site generator)
- **Runtime**: Node.js >= 22.12.0 (ES modules)
- **Language**: TypeScript with strict mode
- **UI Framework**: Svelte 5 (via @astrojs/svelte integration)
- **Deployment**: Cloudflare (via @astrojs/cloudflare adapter)
- **Content**: MDX, Markdown with content collections
- **Styling**: Scoped CSS in components + global CSS

## Code Style Guidelines

### Astro Components (.astro files)

- Use TypeScript in frontmatter with explicit `interface Props`
- Props interfaces use PascalCase (e.g., `interface Props`)
- Component file names use PascalCase (e.g., `BaseHead.astro`)
- Style tags use scoped CSS (no `scoped` attribute needed in Astro)
- Use semantic HTML5 elements

```astro
---
interface Props {
  title: string;
  description: string;
}
const { title, description } = Astro.props;
---
```

### Svelte Components (.svelte files)

- **Installation**: Run `npx astro add svelte` to add Svelte support
- **File naming**: Use PascalCase for component names (e.g., `Counter.svelte`)
- **Location**: Store Svelte components in `src/components/` alongside Astro components
- **Usage in Astro**: Import and use Svelte components in `.astro` files for interactivity

```svelte
<!-- src/components/Counter.svelte -->
<script>
  let count = $state(0);
</script>

<button onclick={() => count++}>
  Count: {count}
</button>

<style>
  button {
    background: var(--accent);
  }
</style>
```

```astro
---
// Use in Astro files for interactive components
import Counter from '../components/Counter.svelte';
---
<Counter client:load />
```

**Key Svelte 5 features to use:**
- Use `$state()` for reactive state (not `$:` reactivity)
- Use `$derived()` for computed values
- Use `$effect()` for side effects (replaces `onMount`)
- Use `$props()` for component props with TypeScript

**Props pattern:**
```svelte
<script>
  interface Props {
    title: string;
    count?: number;
  }
  let { title, count = 0 }: Props = $props();
</script>
```

### TypeScript

- Strict TypeScript mode is enabled (`strictNullChecks: true`)
- Use explicit types for function parameters and return types
- Use `type` for type aliases, `interface` for object shapes
- Prefer `const` over `let`
- Content collections are defined in `src/content.config.ts` using Zod schemas

```typescript
// Use interface for component props
interface Props {
  title: string;
  optional?: string;
}

// Use const assertions for literal types
const SITE_TITLE = 'Blog' as const;
```

### Imports

- Use absolute imports for Astro core: `import { Image } from 'astro:assets'`
- Use relative imports for local modules: `import BaseHead from '../components/BaseHead.astro'`
- Group imports: Astro built-ins first, then third-party, then local

```astro
---
import { Image } from 'astro:assets';
import type { CollectionEntry } from 'astro:content';
import BaseHead from '../components/BaseHead.astro';
import { SITE_TITLE } from '../consts';
---
```

### File Naming

| Type | Convention |
|------|------------|
| Components | PascalCase (e.g., `BaseHead.astro`, `Counter.svelte`) |
| Layouts | PascalCase (e.g., `BlogPost.astro`) |
| Constants | camelCase (e.g., `consts.ts`) |
| Config | camelCase (e.g., `astro.config.mjs`) |
| Pages | kebab-case (e.g., `about.astro`) or index.astro |
| Content | kebab-case for blog posts |

### CSS Conventions

- Use CSS custom properties from `src/styles/global.css`
- Component styles are scoped by default
- Global styles imported in `BaseHead.astro` from `../styles/global.css`
- Use CSS variables for theming:
  - `--accent` for primary color
  - `--black`, `--gray`, `--gray-light`, `--gray-dark` for text

### Content Collections

- Collections defined in `src/content.config.ts`
- Blog posts stored in `src/content/blog/`
- Frontmatter validated with Zod schemas
- Use `glob()` loader for Markdown/MDX files

### Error Handling

- Astro handles build-time errors with TypeScript checking
- No explicit runtime error boundaries configured
- Validate content frontmatter with Zod schemas

### Accessibility

- Include `lang` attribute on `<html>`: `<html lang="en">`
- Use semantic HTML5 elements
- Add `aria-label` or `sr-only` text for icons/links
- Images should have `alt` attributes

## Project Structure

```
src/
  components/      # Reusable Astro components
  content/         # Markdown/MDX content collections
  layouts/         # Page layouts
  pages/           # File-based routing
  styles/          # Global CSS
  consts.ts        # Site constants
  content.config.ts # Content collection schemas
public/            # Static assets
```

## Important Notes

- This is a minimal starter template - no ESLint, Prettier, or testing framework
- Use `npm run astro check` for type checking
- Deployment uses Wrangler CLI with Cloudflare adapter
- Site URL configured as `https://example.com` in `astro.config.mjs`
