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
- **Smooth Animations**: Powered by Framer Motion and CSS transitions for seamless page routes and hover states.
- **Clean Architecture**: Minimal dependency footprint, strongly typed, and easy to scale.
- **Vercel Ready**: Pre-configured `vercel.json` for SPA routing and instant deployment.

## 📁 Project Structure

```text
src/
├── assets/             # Static images, SVGs, etc.
├── components/         
│   └── layout/         # Shared layouts (Navbar)
├── context/            # React Context for global state (ThemeContext)
├── layouts/            # Page transition wrappers (RootLayout)
├── pages/              # Main application views (Home, Projects, etc.)
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

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
