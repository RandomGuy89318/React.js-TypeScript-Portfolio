# Cyber Portfolio

A highly immersive, production-ready developer portfolio scaffold built with React (Vite) and TypeScript. Designed for developers who love terminal aesthetics, cyberpunk vibes, and minimalist interfaces.

## 🚀 Features

- **8-Theme Design Engine**: A robust, globally applied multi-theme system managed by React Context and CSS variables.
  - `Hacker`: Classic terminal green-on-black.
  - `Neon`: Cyberpunk purple/cyan with glowing blur blobs.
  - `Matrix`: Deep green noise texture.
  - `Midnight`: Clean, dark navy professional UI.
  - `Solarized`: Soft warm terminal-style flat background.
  - `CRT`: Retro CRT monitor style with CSS scanlines and flicker.
  - `Void`: Pure minimal dark theme with high contrast.
  - `Aurora`: Animated shifting gradient (blue/green/purple).
- **Fully Responsive Architecture**: A robust CSS layout that fluidly adapts to mobile, tablet, and desktop screens without breaking the terminal visual hierarchy.
- **Developer OS Dashboard Interface**: A professional, cleanly structured 3-zone layout consisting of a Hero section, Main Body content panel, and a sticky Utility sidebar.
- **Interactive Terminal Playground**: An embedded, fully interactive terminal within the Hero section that serves as a primary feature sandbox.
- **Developer Games & Quizzes**: Built-in interactive coding quizzes and puzzles covering topics like React, TypeScript, Laravel, and SQL to test knowledge directly from the interface.
- **Dynamic Contact Hub**: A fully actionable contact page featuring direct links to send emails, view GitHub profiles, and download resumes, alongside a copy-to-clipboard tool.
- **Interactive Certificates**: Expandable certificate cards showcasing dynamic image previews and seamless PDF viewing options.
- **Interactive UI Components**: Includes theme-aware `TechTag` pills, a real-time `LiveClock` with blinking cursor, and an animated `StatsSection` with count-up metrics.
- **Robust Navigation**: Controlled container-based scrolling for a stable and seamless user experience.
- **Modular Data Architecture**: 100% of the content is driven by static files in `src/data/`, meaning you can update your entire portfolio without touching a single React component!
- **Smooth Animations**: Powered by Framer Motion and CSS transitions for seamless page routes, hover states, and dynamic metric counting.
- **Clean Architecture**: Minimal dependency footprint, strongly typed, and easy to scale.
- **Vercel Ready**: Pre-configured `vercel.json` for SPA routing and instant deployment.

## 📁 Project Structure

```text
src/
├── components/         
│   ├── layout/         # Shared layouts (Navbar)
│   └── ui/             # Reusable UI elements (TechTag, LiveClock, StatsSection)
├── context/            # React Context for global state (ThemeContext)
├── data/               # 📂 ALL PORTFOLIO CONTENT LIVES HERE (projects, certs, info)
├── layouts/            # Page transition wrappers (RootLayout)
├── pages/              # Main application views (Home, Projects, Certificates, etc.)
├── styles/             # Global CSS and theme variables
├── App.tsx             # Application router
└── main.tsx            # React entry point
```

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **Routing**: React Router v7
- **Animations**: Framer Motion
- **Styling**: Vanilla CSS (Global Tokens + Variables)

## 💻 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🧩 Updating Content

To customize the portfolio with your own info, simply edit the files inside the `src/data/` directory. The React UI components will automatically render your new data.
- **`projects.ts`**: Update your project cards and tech stacks.
- **`personalInfo.ts`**: Update your name, titles, contact info, and terminal greeting.
- **`skills.ts`**: Update the skills shown on the Home page (also counted in the stats).
- **`certificates.ts`**: Add your certifications, expanding them dynamically with `.png` image previews and `.pdf` documents placed in the `public/certificates` folder.
- **`stats.ts`**: Project, certificate, and technology counts are derived automatically; update the GitHub repository count manually if it changes.
- **`*Questions.ts`**: Update the interactive coding quizzes and puzzles (e.g., `typescriptQuestions.ts`, `reactHookQuestions.ts`).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
