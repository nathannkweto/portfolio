# Software Engineering Portfolio

A collection of projects and career experiences I have had as a software engineer presented in a simple, professional frontend app with no backend or CMS.

> **Note to Reviewers:** This repository is structured to mirror an enterprise-scale frontend service, prioritizing readability, scalability, and type safety over complex runtime features.

## 🎯 Strategic Approach

This codebase applies these fundamental principles:
1.  **Architectural Discipline:** Separation of concerns (View vs. Data vs. Logic).
2.  **Type Safety:** Strict TypeScript implementation with shared interfaces.
3.  **Maintainability:** A predictable folder structure that allows for easy onboarding.
4.  **Performance:** Zero-runtime data fetching strategies for optimal Time-to-Interactive.

## 🛠 Tech Stack

* **Core:** React 18, TypeScript 5, Vite
* **UI Framework:** Material UI v6
* **Routing:** React Router DOM v6
* **State Management:** Local component state + URL state (no global store bloat)
* **Styling:** Emotion (MUI default) with centralized Theme Provider
* **CI/CD:** GitHub Actions -> GitHub Pages

## 📂 Architecture & Project Structure

The project follows a **Domain-Driven** directory structure rather than a purely feature-based one.

```text
src/
├── app/             # Application entry point, providers, and routing logic
├── assets/          # Static media assets
├── components/      # Shared UI primitives
│   ├── common/      # Generic atoms (ErrorBoundary)
│   ├── layout/      # Persistent shell (Header, Footer)
│   └── navigation/  # Navigation elements
├── data/            # Static Data Layer (mimics API responses)
├── pages/           # View logic (Page-level composition)
├── theme/           # Centralized visual governance (MUI Theme)
├── types/           # Shared TypeScript interfaces (Data Contracts)
└── utils/           # Shared helper functions
```

## 🚀 Getting Started

### Prerequisites

* Node.js (v18 or higher recommended)
* npm

### Installation

```bash
# 1. Clone the repository
git clone [https://github.com/YOUR_USERNAME/portfolio.git](https://github.com/YOUR_USERNAME/portfolio.git)

# 2. Enter the directory
cd portfolio

# 3. Install dependencies
npm install
```

### Development

```bash
# Start the dev server (default port 5173)
npm run dev
```

### Production Build

```bash
# Type-check and build for production
npm run build

# Preview the production build locally
npm run preview
```

## 📝 How to Customize

This application is data-driven. You do not need to touch React components to update your content.

1.  **Update Profile & Socials:**
    Edit `src/data/profile.ts` to change your name, bio, and social links.

2.  **Add Projects:**
    Edit `src/data/projects.ts`. The UI will automatically render cards and detail pages based on this array.

3.  **Update Experience:**
    Edit `src/data/experience.ts`.

4.  **Change Colors/Fonts:**
    Edit `src/theme/theme.ts`. The entire app will adapt to the new palette.

## 🧪 Quality Assurance

The project enforces code quality via ESLint and Prettier.

```bash
# Run linting
npm run lint

# Check formatting
npm run format
```

**Note:** The ESLint configuration is set to **Strict**. It disallows unused variables (unless prefixed with `_`) and enforces explicit return types on logic functions.

## 🔄 CI/CD & Deployment

This repository utilizes **GitHub Actions** for automated deployment.

### Workflow

1.  **Trigger:** Any push to the `main` branch.
2.  **Build:** Node.js environment installs dependencies and runs `npm run build`.
3.  **Deploy:** The resulting `dist/` folder is pushed to the `gh-pages` branch.

### Setup for GitHub Pages

1.  Go to **Settings** -> **Pages**.
2.  Set Source to "Deploy from a branch".
3.  Set Branch to `gh-pages` / `root`.
4.  Ensure `vite.config.ts` has the correct `base` property matching your repo name:

    ```typescript
    export default defineConfig({
      base: '/portfolio/', // Replace with your repo name
      plugins: [react()],
    })
    ```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).