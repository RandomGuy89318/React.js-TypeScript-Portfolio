# AGENTS.md

## Project

Terminal-themed portfolio SPA: Vite 8 + React 19 + TypeScript, React Router v7, Framer Motion, vanilla CSS. Deployed on Vercel.

## Commands

- `npm ci` — install from `package-lock.json` (npm only).
- `npm run dev` — Vite dev server.
- `npm run lint` — ESLint flat config; checks only `**/*.{ts,tsx}`, ignores `dist`.
- `npm run build` — `tsc -b && vite build`; this is the only typecheck. Writes `dist/`.
- `npm run preview` — serve the built `dist/`.
- No test runner or test files exist. Verify changes with `npm run lint` + `npm run build`; both should pass.

## Entry points and routing

- `index.html` → `src/main.tsx` (wraps app in `ThemeProvider`) → `src/App.tsx` (`BrowserRouter`).
- Routes: `/` Home, `/projects`, `/certificates`, `/contact`, `/games`, all under `RootLayout` (`Navbar` + animated `Outlet`).
- Pages live in `src/pages/<Name>/index.tsx`; page-specific pieces in `src/pages/Home/components/`.

## Content is data-driven

- All portfolio content belongs in `src/data/`, not hardcoded in components: `projects.ts` (`projectsData`), `personalInfo.ts`, `skills.ts` (`skillsData`), `stats.ts`, `certificates.ts`, `terminalCommands.ts`, and the `*Questions.ts` quiz files.
- `stats.ts` derives project, certificate, and technology counts from the data files; only the GitHub repository count is manual.
- Quiz files all consume `QuizQuestion` from `crudQuestions.ts`. Adding a game category also requires updating the `Category` union, `getActiveQuestions`, and `categoriesData` in `src/pages/Games/index.tsx`.
- Terminal commands come from `terminalCommands.ts`. Actions starting with `/` navigate; `SHOW_TIME`, `CLEAR`, and `OPEN_RESUME` are special-cased in `src/components/terminal/Terminal.tsx`. The `help` output is rendered specially but still reads the same array.
- Certificates: `filename` is a base name; `CertificateCard` loads `/certificates/<filename>-1.png` and `/certificates/<filename>.pdf`. Add both files under `public/certificates` with exactly matching names (spaces are allowed).
- `personalInfo.resumePath` is `/placeholder-resume.pdf`, which is not present in `public/` (known placeholder).

## Styling and themes

- `src/styles/globals.css` is the only global stylesheet (imported in `App.tsx`).
- No CSS Modules or Tailwind. Use the global utility classes (`container`, `terminal-card`, `terminal-text`, `btn`) plus inline style objects typed with `React.CSSProperties`; colors/spacing use CSS variables (`--bg-color`, `--text-color`, `--accent-primary`, `--accent-secondary`, `--card-bg`, `--border-color`, `--glow`, `--shadow`).
- Theme is set as `data-theme` on `<html>` and persisted in `localStorage` under `portfolio-theme` (`src/context/ThemeContext.tsx`).
- Adding or renaming a theme requires updating all of: the `[data-theme='...']` block in `globals.css`, `ThemeType` and `validThemes` in `ThemeContext.tsx`, the `themes` list in `src/pages/Home/components/HomeSidebarRight.tsx`, and the `themes` output in `terminalCommands.ts`. `ThemeType` has 9 IDs including `light`, but the sidebar switcher exposes only 8 (no `light`).

## TypeScript/build constraints

- `verbatimModuleSyntax` is on: type-only imports must use `import type`.
- `erasableSyntaxOnly` is on: no enums, namespaces, or parameter properties.
- `noUnusedLocals` and `noUnusedParameters` are on: unused imports/params fail `npm run build`.
- `strict` is not enabled.
- Components consistently `import React` and use `React.FC`; keep that pattern even though `jsx: react-jsx` is configured.

## Deployment

- Vercel. `vercel.json` rewrites all paths to `/index.html` so BrowserRouter deep links work.
- No CI workflows or pre-commit hooks are configured.
