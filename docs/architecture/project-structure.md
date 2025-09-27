# Project Structure

This document outlines the structure of the MmabiaaCares project, providing an overview of the main directories and files.

## Root Directory

```
MmabiaaCares/
├── .git/                # Git repository files
├── .gitignore           # Specifies intentionally untracked files to ignore
├── README.md            # Project overview and documentation
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript configuration
├── next.config.js       # Next.js configuration
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── public/              # Static files
└── app/                 # Application code (Next.js 13+ App Router)
```

## App Directory (Next.js 13+ App Router)

```
app/
├── about/               # About page
│   └── page.tsx
├── contact/             # Contact page
│   └── page.tsx
├── donate/              # Donation page
│   └── page.tsx
├── events/              # Events section
│   ├── loading.tsx      # Loading UI for events page
│   └── page.tsx
├── impact/              # Impact section
│   ├── loading.tsx      # Loading UI for impact page
│   └── page.tsx
├── programs/            # Programs page
│   └── page.tsx
├── volunteer/           # Volunteer page
│   └── page.tsx
├── globals.css          # Global styles
├── layout.tsx           # Root layout
└── page.tsx             # Home page
```

## Components

```
components/
├── theme-provider.tsx   # Theme management
└── ui/                  # Reusable UI components
    ├── accordion.tsx
    ├── alert-dialog.tsx
    ├── alert.tsx
    ├── aspect-ratio.tsx
    ├── avatar.tsx
    ├── badge.tsx
    └── ... (other UI components)
```

## Key Files

- `app/layout.tsx` - The root layout that wraps all pages
- `app/page.tsx` - The home page
- `components/theme-provider.tsx` - Handles theming throughout the application
- `tailwind.config.js` - Configuration for Tailwind CSS
- `tsconfig.json` - TypeScript configuration

## Static Files

- `public/` - Contains static assets like images, fonts, and other files that should be served as-is

## Environment Variables

- `.env.local` - Local environment variables (not committed to version control)
- `.env.example` - Example environment variables (committed to version control)

## Build and Deployment

- `.github/` - GitHub Actions workflows (if using GitHub for CI/CD)
- `next.config.js` - Next.js configuration for build and deployment

## Testing

- `__tests__/` - Test files (if using Jest or similar)
- `jest.config.js` - Jest configuration (if using Jest)
- `cypress/` - End-to-end tests (if using Cypress)

## Documentation

- `docs/` - Project documentation (this directory)

## Best Practices

1. **Component Organization**:
   - Place reusable UI components in `components/ui/`
   - Page-specific components should be colocated with their respective pages

2. **File Naming**:
   - Use kebab-case for file names
   - Use PascalCase for component files

3. **Code Style**:
   - Follow the project's ESLint and Prettier configuration
   - Use TypeScript for type safety

4. **State Management**:
   - Use React Context for global state
   - Consider using a state management library if the application grows in complexity
