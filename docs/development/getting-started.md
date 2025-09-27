# Getting Started with MmabiaaCares

This guide will help you set up and run the MmabiaaCares project on your local machine for development and testing purposes.

## Prerequisites

- Node.js (v18 or later)
- npm (v9 or later) or yarn
- Git
- A code editor (VS Code recommended)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mmabiaa/MmabiaaCares.git
   cd MmabiaaCares
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory and add the necessary environment variables:
   ```env
   NEXT_PUBLIC_API_URL=your_api_url_here
   # Add other environment variables as needed
   ```

## Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run the linter
- `npm test` - Run tests

## Project Structure

- `/app` - Application pages and routing
- `/components` - Reusable UI components
- `/public` - Static files
- `/styles` - Global styles and themes
- `/utils` - Utility functions and helpers

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [React Documentation](https://react.dev/) - Learn React.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Learn TypeScript.

## Getting Help

If you encounter any issues, please check the [Troubleshooting](./troubleshooting.md) guide or open an issue on GitHub.
