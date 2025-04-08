# Node Express TypeScript Template

A modern, ready-to-use template for building scalable Node.js applications with Express and TypeScript.

## Features

- 🚀 **Express.js** - Fast, unopinionated, minimalist web framework for Node.js
- 🔥 **TypeScript** - Strongly typed language that builds on JavaScript
- ⚙️ **Dotenv** - Environment variable management
- 🔄 **ts-node-dev** - TypeScript execution with hot-reload for development
- 🧹 **ESLint & Prettier** - Code linting and formatting
- ⚡ **Fast Development Experience** - Optimized for developer productivity

## Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn

## Getting Started

### Installation

1. Clone this repository:

```bash
git clone <repository-url>
cd Node\ TypeScript\ Template
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:

```bash
PORT=5000
DATABASE_URL=your_database_url_here
```

### Running the Application

#### Development mode (with hot reload):

```bash
npm run start:dev
# or
yarn start:dev
```

#### Production mode:

```bash
npm run start:prod
# or
yarn start:prod
```

## Project Structure

```
.
├── src/
│   ├── app/
│   │   └── config/
│   │       └── index.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── .eslintrc.json
├── .gitignore
├── .prettierrc.json
├── package.json
└── tsconfig.json
```

## Available Scripts

- `npm run start:dev` - Start the application in development mode with hot reload
- `npm run start:prod` - Build and start the application in production mode
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Run ESLint and automatically fix issues
- `npm run format` - Format code using Prettier

## Configuration

Environment variables can be set in the `.env` file:

- `PORT` - The port on which the server will run
- `DATABASE_URL` - URL for your database connection

## License

ISC
